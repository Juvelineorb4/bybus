/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	AUTH_BYBUS_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import moment from "moment-timezone";
import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";

const GRAPHQL_ENDPOINT = process.env.API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const { Sha256 } = crypto;
moment.tz.setDefault("America/Caracas");
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
  const fetchBookingsAvailables = async (nextToken, result = []) => {
    const response = await CUSTOM_API_GRAPHQL(listBookings, {
      filter: {
        or: [{ status: { eq: "AVAILABLE" } }, { status: { eq: "SOLDOUT" } }],
      },
      nextToken,
    });
    console.log("RESPUESTA: ", response)
    const items = response.data.listBookings.items;
    result.push(...items);

    if (response.data.listBookings.nextToken) {
      return fetchBookingsAvailables(response.data.listBookings.nextToken, result);
    }

    return result;
  };
  const fetchBookingsBoarding = async (nextToken, result = []) => {
    const response = await CUSTOM_API_GRAPHQL(listBookings, {
      filter: { status: { eq: "BOARDING" } },
      nextToken,
    });

    const items = response.data.listBookings.items;
    result.push(...items);

    if (response.data.listBookings.nextToken) {
      return fetchBookingsBoarding(response.data.listBookings.nextToken, result);
    }

    return result;
  };

  const allBookingsAvalaibles = await fetchBookingsAvailables();
  const allBookingsBoarding = await fetchBookingsBoarding();
  // Obtiene la fecha y hora actual en formato ISO 8601
  console.log("BOOKINGS AVA: ", allBookingsAvalaibles);

  for (const item of allBookingsAvalaibles) {
    // formamos la hora de la base de dtaos con date and time como objecto moment
    const departure = item.departure;
    const departureDatetime = moment(
      `${departure.date} ${departure.time}`,
      "YYYY-MM-DD HH:mm:ss"
    );
    // Compara con la fecha y hora actual
    const now = moment().format("YYYY-MM-DDTHH:mm:ssZ");

    // Calcula la diferencia en minutos entre la hora del servidor y la hora de la tarea
    const diffInMinutes = departureDatetime.diff(now, "minutes");

    if (diffInMinutes <= 17) {
      await CUSTOM_API_GRAPHQL(updateBooking, {
        input: {
          id: item.id,
          status: "BOARDING",
        },
      });
    }
  }

  for (const item of allBookingsBoarding) {
    // formamos la hora de la base de dtaos con date and time como objecto moment
    const arrival = item.arrival;
    const arrivalDatatime = moment(
      `${arrival.date} ${arrival.time}`,
      "YYYY-MM-DD HH:mm:ss"
    );
    // Compara con la fecha y hora actual
    const now = moment().format("YYYY-MM-DDTHH:mm:ssZ");

    // Calcula la diferencia en minutos entre la hora del servidor y la hora de la tarea
    const diffInMinutes = arrivalDatatime.diff(now, "minutes");

    if ((diffInMinutes) => 0 || diffInMinutes <= 1) {
      await CUSTOM_API_GRAPHQL(updateBooking, {
        input: {
          id: item.id,
          status: "ARRIVED",
        },
      });
    }
  }

  if (allBookingsAvalaibles?.length > 0 || allBookingsBoarding.length > 0) {
    bodyresponse = `Elemento actualizados`;
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
