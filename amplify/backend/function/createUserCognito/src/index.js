/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	API_BYBUSGRAPHQL_USERTABLE_ARN
	API_BYBUSGRAPHQL_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// import crypto from "@aws-crypto/sha256-js";
// import { defaultProvider } from "@aws-sdk/credential-provider-node";
// import { SignatureV4 } from "@aws-sdk/signature-v4";
// import { HttpRequest } from "@aws-sdk/protocol-http";
// import { default as fetch, Request } from "node-fetch";

// const GRAPHQL_ENDPOINT = process.env.API_BYBUS_GRAPHQLAPIENDPOINTOUTPUT;
// const AWS_REGION = process.env.AWS_REGION || "us-east-1";
// const { Sha256 } = crypto;

// const query = /* GraphQL */ `
//   query LIST_TODOS {
//     listTodos {
//       items {
//         id
//         name
//         description
//       }
//     }
//   }
// `;

import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";
const dynamodb = new DynamoDBClient({ region: "us-east-1" });
const TABLE_USER_NAME = process.env.API_BYBUSGRAPHQL_USERTABLE_NAME;

const STATUS = {
  ALLOWED: "ALLOWED",
  DENIED: "DENIED",
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  /*
    Logica: 
    1. Verificar que tipo de registro es si es por cognito o por google
    2. Verificar por correo si ya existe un usuario con ese correo 
    3. SI el usuario ya existe actualizar el campo correspondiente de owner ya sea para registro de google o cognito 
    4. si no existe crear la tabla respectiva con su owner ya sea para google o cognito 
  */
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const { sub, email, name } = event.request.userAttributes;
  console.log("ATTRIBUTOS: ", event.request.userAttributes);
  const { triggerSource } = event;
  if (triggerSource === "PostConfirmation_ConfirmForgotPassword") return event;

  if (!(triggerSource === "PostConfirmation_ConfirmSignUp"))
    throw new Error("Trigger No aceptado en esta funcion");

  // if (!(event.request.userAttributes["custom:userType"] === "customer")) {
  //   throw new Error(
  //     `Usuario ${event.request.userAttributes["custom:userType"]} no aceptado.`
  //   );
  // }
  // parametros de items table
  const info = {
    id: { S: uuidv4() },
    name: { S: name },
    email: { S: email },
    status: { S: STATUS.ALLOWED },
    previousBalance: { N: "0" },
    owner: { S: sub },
  };

  // formato de Put Item
  const params = {
    TableName: TABLE_USER_NAME,
    Item: info,
  };

  try {
    // Put al dynamodb tabla especifica
    const result = await dynamodb.send(new PutItemCommand(params));
    console.log(result);
    return event;
  } catch (error) {
    throw new Error(error);
  }
};
