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

const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      status
    }
  }
`;

const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      status
      code
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          __typename
        }
        nextToken
        __typename
      }
      stops {
        items {
          id
          bookingID
          price
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
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
  const { ticketID, bookingID } = event.arguments.input;
  console.log("TICKETID", ticketID);
  console.log("BOOKINGID: ", bookingID);
  console.log("EL GRAPHQL ENDPOINT", GRAPHQL_ENDPOINT);
  console.log("REGION: ", process.env.AWS_REGION);
  /* 
  1 validamos que el id del ticket pertenezca a la reserva enviada
  2. si es asi cambiar el status del ticket 
  */
  let message;
  try {
    const result = await CUSTOM_API_GRAPHQL(getBooking, {
      id: bookingID,
    });
    const tickets = result?.data?.getBooking?.tickets?.items;
    const isExistenTIcket = tickets.find(
      (item, index) => item?.id === ticketID
    );

    console.log("TICKETS: ", tickets);
    console.log("Existe el TIcket? ", isExistenTIcket);
    if (!isExistenTIcket) throw new Error("Ticket No existe en este viaje");
    switch (isExistenTIcket?.status) {
      case "ACTIVATED":
        throw new Error(`Ticket no Asigando a un cliente`);
      case "BOARDED":
        throw new Error(
          `Cliente con ticket ${isExistenTIcket?.id}, ya abordado`
        );
      case "PAID":
        const result = await CUSTOM_API_GRAPHQL(updateTicket, {
          input: {
            id: ticketID,
            status: "BOARDED",
          },
        });
        console.log(result);
        message = `TIcket: ${result?.data?.updateTicket?.id} procesado con exito!`;
        break;
      case "CANCELED":
        throw new Error(`Ticket ${isExistenTIcket?.id} a sido cancelado`);
      default:
        throw new Error(
          `Estado del Ticket no aceptado ${isExistenTIcket?.status}`
        );
    }

    return JSON.stringify({
      statusCode: 200,
      body: { message },
    });
  } catch (error) {
    console.log(error.message);
    console.log(error);
    return JSON.stringify({
      statusCode: 400,
      body: { message: error.message },
    });
  }
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
