/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_BOOKINGTABLE_ARN
	API_BYBUSGRAPHQL_BOOKINGTABLE_NAME
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  PutItemCommand,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const dynamodb = new DynamoDBClient({ region: "us-east-1" });
const TABLE_BOOKING_NAME = process.env.API_BYBUSGRAPHQL_BOOKINGTABLE_NAME;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  /*
   1. verificar que el evento sea MODIFY 
   2. Que el viaje este en AVAILABLE y EL STOCK EN CERO 
   3. Si todo esto es correcto Cambiar Esatdo a SOLDOUT
  */
  for (const record of event.Records) {
    console.log(record.eventName);
    if (record.eventName !== "MODIFY")
      return console.log(`EVENTO EJECUTADO ${record.eventName}`);
    console.log("DynamoDB Record: %j", record.dynamodb);
    console.log("ID DE TABLA A MODIFICAR: ", record.dynamodb.Keys.id.S);
    console.log("NUEVO STOCK: ", record.dynamodb.NewImage.stock.N);
    console.log("ESTADO DEL BOOKING ", record.dynamodb.NewImage.status.S);
    if (
      record.eventName === "MODIFY" &&
      record.dynamodb.NewImage.status.S === "AVAILABLE" &&
      record.dynamodb.NewImage.stock.N === "0"
    ) {
      console.log("el cambio importatente mayor ");
      await UpdateItemTable(record.dynamodb.Keys.id.S);
    }
  }
  return Promise.resolve("Successfully processed DynamoDB record");
};

const UpdateItemTable = async (id) => {
  const params = {
    TableName: TABLE_BOOKING_NAME,
    Key: {
      id: { S: id }, // Define el valor del campo 'email' del item que deseas modificar
    },
    UpdateExpression: "SET #name = :newName", // Define la expresión de actualización
    ExpressionAttributeNames: {
      "#name": "status", // Define el nombre del atributo a actualizar
    },
    ExpressionAttributeValues: {
      ":newName": { S: "SOLDOUT" }, // Define el nuevo valor para el atributo a actualizar
    },
  };

  try {
    const command = new UpdateItemCommand(params);
    const response = await dynamodb.send(command);
    console.log("Item modificado:", response.Attributes);
    return { message: "Item Modificado a SOLDOUT" };
  } catch (error) {
    console.error("Error al modificar el item:", error);
    return { message: null };
  }
};
