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

const listTasaCambios = /* GraphQL */ `
  query ListTasaCambios(
    $filter: ModelTasaCambioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasaCambios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const today = new Date();
  let item = undefined;
  const response = await CUSTOM_API_GRAPHQL(listTasaCambios);
  const tasaCambios = response.data.listTasaCambios.items;
  if (tasaCambios.length > 0) {
    // Ordenar el arreglo por la fecha createdAt en orden ascendente (de menor a mayor)
    tasaCambios.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    // Ahora tasaCambioItems está ordenado por fecha
    // bucandos tasa de cambio por fecha
    const arraysToday = arraysDateToday(tasaCambios, today);
    if (arraysToday.length > 0) {
      arraysToday.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      item = arraysToday[arraysToday.length - 1];
    } else {
      item = tasaCambios[tasaCambios.length - 1];
    }
    console.log("ULTIMA TASA DE CAMBIO: ", tasaCambios[tasaCambios.length - 1]);
  } else {
    const tasa = await obtenerTasaCambio();
    item = { price: tasa };
  }
  return JSON.stringify({
    statusCode: 200,
    body: {
      message: "TASA DE HOY EXITOSO",
      price: item?.price,
    },
  });
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

const arraysDateToday = (arreglo, fecha) => {
  return arreglo.filter((objeto) => {
    // Comparar solo la parte de la fecha (sin horas, minutos, etc.)
    const fechaObjeto = new Date(objeto.createdAt);
    return fechaObjeto.toDateString() === fecha.toDateString();
  });
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
