/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
	STORAGE_S3STORAGEBYBUS_BUCKETNAME
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
  mutation UpdateAgency(
    $input: UpdateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    updateAgency(input: $input, condition: $condition) {
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
    let resultS3 = "";
    if (base64Image !== "") {
      const base64Data = new Buffer.from(
        base64Image.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );
      const type = base64Image.split(";")[0].split("/")[1];
      const params = {
        Bucket: BUCKET_NAME,
        Key: `public/agency/${agencyID}/profile.${type}`, // type is not required
        Body: base64Data,
        ContentEncoding: "base64", // required
        ContentType: `image/${type}`, // required. Notice the back ticks
      };
      resultS3 = await PUT_OBJECT_S3(params);
      console.log("RESULTADO DE PUT OBJECT: ", resultS3);
    }
    if (resultS3.response && resultS3.url) {
      // // creamos el usuario en dynamodb
      const responseUpdateAgencyAgency = await CUSTOM_API_GRAPHQL(
        updateAgency,
        {
          input: {
            id: agencyID,
            image: resultS3.url,
            identityID: identityID,
          },
        }
      );

      console.log("RESUTLADO DE GUARDADO:", responseUpdateAgencyAgency);
      if (responseUpdateAgencyAgency?.errors) {
        throw new Error(`${responseUpdateAgencyAgency?.errors[0]?.message}`);
      }
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

const PUT_OBJECT_S3 = async (params) => {
  const command = new PutObjectCommand(params);

  try {
    const response = await s3.send(command);
    console.log(response);
    return {
      url: `https://${BUCKET_NAME}.s3.amazonaws.com/${params?.Key}`,
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
