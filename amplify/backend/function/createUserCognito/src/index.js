/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	API_BYBUSGRAPHQL_USERTABLE_ARN
	API_BYBUSGRAPHQL_USERTABLE_NAME
	AUTH_BYBUS_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import {
  CognitoIdentityProvider,
  AdminAddUserToGroupCommand,
  AdminUpdateUserAttributesCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
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
// estatus de USer Table
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
    1. si no es el trigger PostConfirmation_ConfirmSignUp retornar event
    2. crear el registro en userTable
    2. Agregar id de la tabla creada a userTableID
    3. Pasar A customer grupo a el usuario confirmado
  */
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const { sub, email, name } = event.request.userAttributes;
  console.log("ATTRIBUTOS: ", event.request.userAttributes);
  const { triggerSource } = event;
  if (triggerSource === "PostConfirmation_ConfirmForgotPassword") return event;

  if (!(triggerSource === "PostConfirmation_ConfirmSignUp"))
    throw new Error("Trigger No aceptado en esta funcion");

  try {
    // Crear usuario
    const result = await CREATE_USERTABLE(event.request.userAttributes);
    console.log("CREATE TABLE USER: ", result);
    //  si se creo correctamente el usuario agregamos el id al atributo del usuario en userTableID
    paramsUpdateAttr = {
      username: sub,
      attrName: "custom:userTableID",
      attrValue: result?.id,
    };
    const updateAttr = await COGNITO_UPDATE_ATTR_USER(paramsUpdateAttr);
    console.log("UPDATE ATTR USER COGNITO: ", updateAttr);

    // ahora que ya se creo la tabla y se agrego el userTableID pasamos el usuario al grupo customer
    const addGroupd = COGNITO_ADD_GROUP({
      username: sub,
      groupName: "customer",
    });
    console.log("ADD GROUPD USER COGNITP: ", addGroupd);
    return event;
  } catch (error) {
    throw new Error(error);
  }
};

const CREATE_USERTABLE = async (data) => {
  const { sub, email, name } = data;
  const ID = uuidv4();
  // parametros de items table
  const info = {
    id: { S: ID },
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
  const result = await dynamodb.send(new PutItemCommand(params));
  return {
    id: ID,
    result: result,
  };
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
