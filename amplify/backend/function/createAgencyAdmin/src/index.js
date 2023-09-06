/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	AUTH_BYBUS_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import {
  CognitoIdentityProvider,
  AdminCreateUserCommand,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";

// configuraicons de end point
const GRAPHQL_ENDPOINT = process.env.API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT;
const COGNITO_USERPOOL = process.env.AUTH_BYBUS_USERPOOLID;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const { Sha256 } = crypto;
/************************************ */
// configuracion de cognito
const cognito = new CognitoIdentityProvider({
  region: process.env.REGION || "us-east-1",
});
// configuraicon de SES
const ses = new SESClient();

const createAgency = /* GraphQL */ `
  mutation CreateAgency($input: CreateAgencyInput!) {
    createAgency(input: $input) {
      id
      cognitoID
      name
      rif
      email
      phone
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;

const updateAgencySubscription = /* GraphQL */ `
  mutation UpdateAgencySubscription($input: UpdateAgencySubscriptionInput!) {
    updateAgencySubscription(input: $input) {
      id
      status
    }
  }
`;
const queryAll = /* GraphQL */ `
  query LIST_TODOS {
    listAgencySubscriptions {
      items {
        id
        name
        email
      }
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const generarClaveTemporal = (longitud) => {
  /*
    registrar agencia 
    pasarlo al grupo de agenci a
    enviar mensaje 
    cambiar estado del agency subscrition 
  */
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let claveTemporal = "";
  for (let i = 0; i < longitud; i++) {
    claveTemporal += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return claveTemporal;
};

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  // obtenemos las variables de los input
  const { username, rif, phone, name, agencySubsTableID } =
    event.arguments.input;

  // creamos el usuario
  const responseAgency = await createAgencyCognito(event.arguments.input);
  if (responseAgency.response === null)
    return JSON.stringify({ message: "Error al crear Usuario en Cognito" });
  // envaimos un mensaje al correo
  await SEND_EMAIL(username, responseAgency.claveTemporal);
  // // creamos el usuario en dynamodb
  await CUSTOM_API_GRAPHQL(createAgency, {
    input: {
      cognitoID: responseAgency.response.User.Username,
      name: name,
      rif: rif,
      email: username,
      phone: phone,
      owner: responseAgency.response.User.Username,
    },
  });
  // // cambiamos el stado de PENDING A ACCEPTED
  await CUSTOM_API_GRAPHQL(updateAgencySubscription, {
    input: {
      id: agencySubsTableID,
      status: "ACCEPTED",
    },
  });
  return JSON.stringify({ message: "Usuario Registrado Exitosamente" });
};

const createAgencyCognito = async (attr) => {
  const { username, rif, phone, name } = attr;
  const claveTemporal = generarClaveTemporal(12);
  console.log("CLAVE TEMP: ", claveTemporal);
  console.log("AUTH ID: ", COGNITO_USERPOOL);
  const params = {
    UserPoolId: COGNITO_USERPOOL, // Reemplaza con el ID de tu User Pool
    Username: username,
    TemporaryPassword: claveTemporal,
    MessageAction: "SUPPRESS", // Evita el envío de código de confirmación
    UserAttributes: [
      {
        Name: "email",
        Value: username,
      },
      {
        Name: "name",
        Value: name,
      },
      {
        Name: "custom:rif",
        Value: rif,
      },
      {
        Name: "custom:phone",
        Value: phone,
      },
      {
        Name: "custom:temporaryPassword",
        Value: claveTemporal,
      },
      {
        Name: "custom:userType",
        Value: "agency",
      },
      {
        Name: "email_verified",
        Value: "true",
      },
    ],
  };
  try {
    const command = new AdminCreateUserCommand(params);
    const response = await cognito.send(command);
    const paramsGroup = {
      GroupName: "agency",
      UserPoolId: COGNITO_USERPOOL,
      Username: response.User.Username,
    };
    const command2 = new AdminAddUserToGroupCommand(paramsGroup);
    await cognito.send(command2);
    console.log("AGENCY: ", response.User.Attributes);
    return { response, claveTemporal };
  } catch (error) {
    console.log("Error al crear Agency: ", error);
    return { response: null };
  }
};

const fetchExample = async () => {
  const query = /* GraphQL */ `
    query LIST_TODOS {
      listAgencySubscriptions {
        items {
          id
          name
          email
        }
      }
    }
  `;
  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);

  const request = new Request(endpoint, signed);
  const response = await fetch(request);
  const result = await response.json();
  return result;
};

const CUSTOM_API_GRAPHQL = async (query, variables = {}) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query, variables }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);

  const request = new Request(endpoint, signed);
  const response = await fetch(request);
  const result = await response.json();
  return result;
};

const SEND_EMAIL = async (username, claveTemporal) => {
  const paramsSES = {
    Source: "support@bybusvenezuela.com" /* required */,
    Destination: {
      /* required */
      ToAddresses: [
        `${username}`,
        /* more items */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Text: {
          Charset: "UTF-8",
          Data: `
          Gracia por registrarte como agencia de Bybus C.A.
          Tu correo es: ${username}
          Tu contraseña es: ${claveTemporal}
          Ten en cuenta que esta contraseña es temporal al logearte te pedira que actualices tu contraseña.
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Confirmacion de registro BYBUS C.A.",
      },
    },
  };
  const command = new SendEmailCommand(paramsSES);
  const response = await ses.send(command);
  console.log("SEND EMAIL: ", response);
  return response;
};
