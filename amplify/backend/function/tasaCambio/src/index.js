/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";

const GRAPHQL_ENDPOINT = process.env.API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "us-east-1";
const { Sha256 } = crypto;

const createTasaCambio = /* GraphQL */ `
  mutation CreateTasaCambio(
    $input: CreateTasaCambioInput!
    $condition: ModelTasaCambioConditionInput
  ) {
    createTasaCambio(input: $input, condition: $condition) {
      id
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    const tasa = await obtenerTasaCambio();
    const response = await CUSTOM_API_GRAPHQL(createTasaCambio, {
      input: {
        price: tasa,
      },
    });
    console.log("TASA DE CAMBIO CREADA: ", response);
    return {
      statusCode: 200,
      body: JSON.stringify("TASA DE CAMBIO CREADA"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(`ERROR AL CREAR TASA ${error.message}`),
    };
  }
};

const obtenerTasaCambio = async () => {
  // URL de la API
  const apiUrl =
    "https://v6.exchangerate-api.com/v6/ea2b2f966e83423b672cf0a2/latest/USD";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    const data = await response.json();
    const tasaUsdToVes = data.conversion_rates.VES;
    console.log(data);

    console.log(`Tasa de cambio actual: 1 USD = ${tasaUsdToVes} VES`);
    return tasaUsdToVes;
  } catch (error) {
    console.error(`Error al obtener la tasa de cambio: ${error.message}`);
    throw new Error(`Error al obtener la tasa de cambio: ${error.message}`);
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
