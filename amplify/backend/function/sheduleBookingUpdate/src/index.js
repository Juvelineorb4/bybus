/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	AUTH_BYBUS_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";

const GRAPHQL_ENDPOINT = process.env.API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const { Sha256 } = crypto;

const listBookings = /* GraphQL */ `
  query LIST_BOOKINGS(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        code
        agencyID
        officeID
        transport
        departureCity
        arrivalCity
        departure {
          time
          date
          city
          state
          address
          __typename
        }
        arrival {
          time
          date
          city
          state
          address
          __typename
        }
        stock
        price
        createdBy
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

const updateBooking = /* GraphQL */ `
  mutation UpdateBooking($input: UpdateBookingInput!) {
    updateBooking(input: $input) {
      id
      status
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  let bodyresponse = "";
  const currentTime = new Date();
  console.log(`¡Hola mundo! La hora actual es: ${currentTime}`);

  const response = await CUSTOM_API_GRAPHQL(listBookings, {
    filter: { status: { eq: "AVAILABLE" } },
  });
  // Obtiene la fecha y hora actual en formato ISO 8601
  console.log("RESPONSE: ", response.data.listBookings.items);
  const now = new Date().toISOString();
  const bookingsPasados = response.data.listBookings.items
    .filter((item) => {
      const departure = item.departure;
      // Convierte 'time' y 'date' de 'departure' a una fecha y hora completa en formato ISO 8601
      const departureDatetime = new Date(
        `${departure.date}T${departure.time}`
      ).toISOString();
      // Compara con la fecha y hora actual
      return departureDatetime < now;
    })
    .map((item) => item.id);
  console.log("BOOKINGS PASADOS: ", bookingsPasados);

  const updateListBokkings = bookingsPasados.map(async (id) => {
    console.log("ID UTILIZADO: ", id);
    const response = await CUSTOM_API_GRAPHQL(updateBooking, {
      input: {
        id: id,
        status: "DEPARTED",
      },
    });
    console.log("LOG DE MUTATIONS: ", response);
    return response;
  });
  if (bookingsPasados.length > 0) {
    await Promise.all(updateListBokkings);
    bodyresponse = `Elemento actualizados total ${bookingsPasados.length}`;
  } else {
    bodyresponse = `No hay elementos para actualizar`;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(bodyresponse),
  };
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
