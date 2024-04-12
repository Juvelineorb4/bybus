/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3STORAGEBYBUS_BUCKETNAME
  API_BYBUSGRAPHQL_BOOKINGTABLE_ARN
	API_BYBUSGRAPHQL_BOOKINGTABLE_NAME
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";
const BUCKET_NAME = process.env.STORAGE_S3STORAGEBYBUS_BUCKETNAME;
const GRAPHQL_ENDPOINT = process.env.API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "us-east-1";
const { Sha256 } = crypto;
const s3 = new S3Client({ region: AWS_REGION });
const updateAgency = /* GraphQL */ `
  mutation CreateAgency($input: CreateAgencyInput!) {
    updateAgency(input: $input) {
      id
      image
      identityID
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  try {
    const { agencyID, base64Image, identityID } = JSON.parse(
      event.arguments.input
    );
    // Decodificar la imagen base64 a datos binarios
    const decodedImage = Buffer.from(base64Image, "base64");
    // guardar imagen en S3
    const result = await PUT_OBJECT_S3(
      decodedImage,
      `public/agency/${agencyID}/profile.png`
    );
    if (result.response && result.url) {
      // // creamos el usuario en dynamodb
      const responseUpdateAgencyAgency = await CUSTOM_API_GRAPHQL(
        updateAgency,
        {
          input: {
            id: agencyID,
            image: result.url,
            identityID: identityID,
          },
        }
      );
      console.log("RESUTLADO DE GUARDADO:", responseUpdateAgencyAgency);
    }
    return JSON.stringify({
      statusCode: 200,
      body: { message: "IMAGEN PROFILE CARGA CON EXITO" },
    });
  } catch (error) {
    return JSON.stringify({
      statusCode: 500,
      message: "ERROR AL CARGAR IMAGEN",
      error: error?.message, // Aquí puedes usar error.message para obtener el mensaje de error específico.
    });
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

const PUT_OBJECT_S3 = async (image, path) => {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: path,
    Body: image,
    ContentType: "image/jpeg",
  });

  try {
    const response = await s3.send(command);
    console.log(response);
    return {
      url: `https://${BUCKET_NAME}.s3.amazonaws.com/${path}`,
      response: response,
    };
  } catch (err) {
    console.log("ERROR AR CARGAR IMAGEN", err);
    return {
      url: null,
      response: null,
    };
  }
};
