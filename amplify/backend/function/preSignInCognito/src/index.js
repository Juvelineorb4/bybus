/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	API_BYBUSGRAPHQL_USERTABLE_ARN
	API_BYBUSGRAPHQL_USERTABLE_NAME
	AUTH_BYBUS_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";
import {
  CognitoIdentityProvider,
  AdminAddUserToGroupCommand,
  AdminUpdateUserAttributesCommand,
  AdminListGroupsForUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

// configutacion de cliente de dynamodb
const dynamodb = new DynamoDBClient({ region: "us-east-1" });
const TABLE_USER_NAME = process.env.API_BYBUSGRAPHQL_USERTABLE_NAME;

// configuracion de cliente de cognito
// configuracion de cognito
const cognito = new CognitoIdentityProvider({
  region: process.env.REGION || "us-east-1",
});
const COGNITO_USERPOOL = process.env.AUTH_BYBUS_USERPOOLID;

// GRaphql
const GRAPHQL_ENDPOINT = process.env.API_BYBUS_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const { Sha256 } = crypto;

const query = /* GraphQL */ `
  query LIST_TODOS {
    listTodos {
      items {
        id
        name
        description
      }
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  /*
Logica
1. Este lambda es para verificar atributos antes del inicio de sesion para los usuarios customer
2.  verificar que el usuario customer este agregado en el grupo customer
3.  verificar que su tabla userTableID el campo este lleno 
4.  De no ser asi buscar la tabla que contenga su correo electronico y actualizar el userTableID
*/

  const { sub, email, name } = event.request.userAttributes;
  const { triggerSource } = event;

  try {
    // si es diferente a otro disparador mandamos error
    if (!(triggerSource === "PreAuthentication_Authentication"))
      throw new Error(`Trigger No aceptado en esta funcion ${triggerSource}`);

    console.log(
      "TIPO DE USUARIO ENTRANTE: ",
      event?.request?.userAttributes["custom:userType"]
    );
    // si no es un customer mandamos evento
    if (event?.request?.userAttributes["custom:userType"] !== "customer")
      return event;

    // verificar el customer en grupo customer
    // listamos los grupo al que pertenece
    // const userList = await COGNITO_LIST_GROUPNAME_USER({ username: sub });
    // console.log("LIST COGNITO: ", userList);
    // // preguntamo si existe en el grupo customer
    // const isExisting = userList?.Groups?.find(
    //   (item) => item?.GroupName === "customer"
    // );
    // si no existe en el grupo customer se agrega
    // if (!isExisting) {
    //   // lo aggrego al grupo
    //   const addGroup = await COGNITO_ADD_GROUP({
    //     groupName: "customer",
    //     username: sub,
    //   });
    //   console.log("ADD GROUPD: ", addGroup);
    // }
    // si no tiene el id de la userTable buscar el id de esa tabla por su correo
    if (!event?.request?.userAttributes["custom:userTableID"]) {
      const queryEmailUser = await GET_DB_USERTABLE_EMAIL({ email });
      const userTableID = queryEmailUser?.Items[0]?.id.S;
      console.log("QUERY: ", userTableID);
      // Ya tenemos el id de userTableID
      // cargamos el atributo
      const updatedAttr = await COGNITO_UPDATE_ATTR_USER({
        username: sub,
        attrName: "custom:userTableID",
        attrValue: userTableID,
      });
      console.log("UPDATE ATTR: ", updatedAttr);
    }
    return event;
  } catch (error) {
    throw new Error(error);
  }
};

const COGNITO_LIST_GROUPNAME_USER = async (data) => {
  const { username } = data;

  const input = {
    // AdminListGroupsForUserRequest
    Username: username, // required
    UserPoolId: COGNITO_USERPOOL, // required
  };
  const command = new AdminListGroupsForUserCommand(input);
  const response = await cognito.send(command);
  return response;
};

const COGNITO_ADD_GROUP = async (data) => {
  const { groupName, username } = data;
  const paramsGroup = {
    GroupName: groupName,
    UserPoolId: COGNITO_USERPOOL,
    Username: username,
  };
  const command2 = new AdminAddUserToGroupCommand(paramsGroup);
  const result = await cognito.send(command2);
  console.log("ADD GROUD USER:  ", result);
  return result;
};

const COGNITO_UPDATE_ATTR_USER = async (data) => {
  const { username, attrName, attrValue } = data;
  const params = {
    // AdminUpdateUserAttributesRequest
    UserPoolId: COGNITO_USERPOOL, // required
    Username: username, // required
    UserAttributes: [
      // AttributeListType // required
      {
        // AttributeType
        Name: attrName, // required
        Value: attrValue,
      },
      {
        Name: "custom:userType",
        Value: "customer",
      },
    ],
  };
  const command = new AdminUpdateUserAttributesCommand(params);
  const response = await cognito.send(command);
  return response;
};

const GET_DB_USERTABLE_EMAIL = async (data) => {
  const { email } = data;
  const params = {
    TableName: TABLE_USER_NAME,
    FilterExpression: "#email = :email",
    ExpressionAttributeNames: {
      "#email": "email", // "email" es el nombre del campo en tu tabla
    },
    ExpressionAttributeValues: {
      ":email": { S: email.toLowerCase() }, // el valor del campo "email" que estás buscando
    },
  };
  const command = new ScanCommand(params);
  const response = await dynamodb.send(command);
  return response;
};
