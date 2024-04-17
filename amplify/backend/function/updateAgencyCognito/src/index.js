/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	AUTH_BYBUS_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import {
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  CognitoIdentityProvider,
} from "@aws-sdk/client-cognito-identity-provider";
import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";
// configuracion de cognito
const cognito = new CognitoIdentityProvider({
  region: process.env.REGION || "us-east-1",
});
const AUTH_USERPOOLID = process.env.AUTH_BYBUS_USERPOOLID;
const GRAPHQL_ENDPOINT = process.env.API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "us-east-1";
const { Sha256 } = crypto;

const updateAgency = /* GraphQL */ `
  mutation UpdateAgency(
    $input: UpdateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    updateAgency(input: $input, condition: $condition) {
      id
      pin
      name
      rif
      email
      status
    }
  }
`;

const createAgencyHistory = /* GraphQL */ `
  mutation CreateAgencyHistory(
    $input: CreateAgencyHistoryInput!
    $condition: ModelAgencyHistoryConditionInput
  ) {
    createAgencyHistory(input: $input, condition: $condition) {
      id
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  // obtenemos las variables de los input
  const { username, status, agencyID, reason, description } =
    event.arguments.input;

  try {
    // Verificamos si es para habilitar o inhabilitar
    let resultCognito = "";
    let resultGraphql = "";
    switch (status) {
      case "ACTIVO":
        // ACTIVAMOS EN COGNITO
        resultCognito = await ENABLE_USER(username);
        // CAMBIAMOS EL STATUS EN GRAPHQL
        resultGraphql = await CUSTOM_API_GRAPHQL(updateAgency, {
          input: {
            id: agencyID,
            status,
          },
        });
        // AGREGAMOS EN HISTORY
        break;
      case "BLOQUEADO":
        resultCognito = await DISABLE_USER(username);
        // CAMBIAMOS EL STATUS EN GRAPHQL
        resultGraphql = await CUSTOM_API_GRAPHQL(updateAgency, {
          input: {
            id: agencyID,
            status,
          },
        });
        // AGREGAMOS EN HISTORY
        break;
      default:
        throw new Error("STATUS NO VALIDO");
    }
    await CUSTOM_API_GRAPHQL(createAgencyHistory, {
      input: {
        reason,
        description,
        agencyID,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify("ACTUALIZACION EXITOSA"),
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify(error.message),
    };
  }
};

const CUSTOM_API_GRAPHQL = async (query, variables = {}) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);
  let bodyContent = JSON.stringify({ query });
  if (variables) bodyContent = JSON.stringify({ query, variables });
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
    body: bodyContent,
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);

  const request = new Request(endpoint, signed);
  const response = await fetch(request);
  const result = await response.json();
  return result;
};

const DISABLE_USER = async (username) => {
  const input = {
    // AdminDisableUserRequest
    UserPoolId: AUTH_USERPOOLID, // required
    Username: username, // required
  };
  const command = new AdminDisableUserCommand(input);
  const response = await cognito.send(command);
  return response;
};

const ENABLE_USER = async (username) => {
  const input = {
    // AdminEnableUserRequest
    UserPoolId: AUTH_USERPOOLID, // required
    Username: username, // required
  };
  const command = new AdminEnableUserCommand(input);
  const response = await cognito.send(command);
  return response;
};
