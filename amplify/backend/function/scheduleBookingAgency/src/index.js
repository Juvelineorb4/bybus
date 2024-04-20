/* Amplify Params - DO NOT EDIT
	API_BYBUSGRAPHQL_BOOKINGTABLE_ARN
	API_BYBUSGRAPHQL_BOOKINGTABLE_NAME
	API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_BYBUSGRAPHQL_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import moment from "moment-timezone";
import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";
import { v4 as uuidv4 } from "uuid";
//   const ID = uuidv4();

const GRAPHQL_ENDPOINT = process.env.API_BYBUSGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "us-east-1";
const { Sha256 } = crypto;
// moment.tz.setDefault("America/Caracas");

const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;

const getBookingbyCode = /* GraphQL */ `
  query GetBookingbyCode(
    $code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBookingbyCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        code
      }
      nextToken
      __typename
    }
  }
`;

const getAgency = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      id
      percentage
    }
  }
`;
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const weekDays = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  /*
    LOGICA PARA VIAJES PROGRAMADOS CON ANTICIPACION 
    1. obtenemos en inpuy el owner de  la agencia , los datos apra reprogramar y los datos del vaije booking
    2. si la creacion no es para reprogramar entonces se crea un solo viaje 
    3.si no hay que crear varios viajes dependiendo del reprogram.date
  */
  try {
    // Obtenemos los parametros
    const { owner, reprogram, booking } = JSON.parse(event.arguments.input);
    const resultAgency = await CUSTOM_API_GRAPHQL(getAgency, {
      id: booking?.agencyID,
    });
    console.log("PORCENTAJE: ", resultAgency);
    const percentage = resultAgency?.data?.getAgency?.percentage;
    let price = parseFloat(booking?.price);
    if (isNaN(price)) throw new Error("PRECIO NO VALIDO");
    // const totalPrice = price + (price * percentage) / 100;
    const totalPrice = price;

    if (reprogram?.is) {
      // Crear varios viajes
      // Viene una creacion devarios bookings
      console.log("Crear varios bookings");
      // cantidad de viajes
      const departureDate = moment(booking?.departure?.date).utc(false);
      console.log("FECHA SALIDA: ", departureDate);

      const scheduleDate = moment(reprogram?.date);
      console.log("FECHA ULTIMA A PROGRAMA: ", scheduleDate);

      // diferencia de dias entre el inicio del viaje y el ultimo programado
      const daysSchedule = scheduleDate.diff(departureDate, "days");

      // llamar a funcion crear viajes multiples
      await MULTIPLE_CREATE_BOOKING(
        daysSchedule,
        departureDate,
        reprogram,
        weekDays,
        GENERATE_CODE,
        CUSTOM_API_GRAPHQL,
        booking,
        totalPrice,
        percentage,
        owner
      );
    } else {
      // Crear un solo viaje
      const ID = uuidv4();
      // obtenemos el codigo del viaje
      const code = await GENERATE_CODE({ id: ID, booking });
      const resultCreate = await CUSTOM_API_GRAPHQL(createBooking, {
        input: {
          id: ID,
          code,
          ...booking,
          price: totalPrice,
          percentage: percentage,
          owner: owner,
        },
      });
      console.log("VIAJE CREADO: ", resultCreate);
      if (resultCreate?.errors) {
        throw new Error(`${resultCreate?.errors[0]?.message}`);
      }
    }

    return JSON.stringify({
      statusCode: 200,
      body: { message: "CREACION DE VIAJES EXITOSO" },
    });
  } catch (error) {
    console.error("Error al llamar a CUSTOM_API_GRAPHQL:", error);
    // Aquí puedes manejar el error de manera adecuada, por ejemplo:
    return JSON.stringify({
      statusCode: 500,
      message: "Error al crear el/los viajes.",
      error: error.message, // Aquí puedes usar error.message para obtener el mensaje de error específico.
    });
  }

  if (reprogram?.is) {
    // Viene una creacion devarios bookings
    console.log("Crear varios bookings");
    // cantidad de viajes
    const departureDate = moment(booking?.departure?.date);
    const scheduleDate = moment(reprogram?.date);
    const arrivalDate = moment(booking?.arrival?.date);
    // diferencia de dias entre el inicio del viaje y el ultimo programado
    const daysSchedule = scheduleDate.diff(departureDate, "days");
    // diferencias entre arrival y departuee
    const daysDifference = arrivalDate.diff(departureDate, "days");
    console.log("DIAS PROGRAMADOS: ", daysSchedule);
    console.log("DIAS ARRAY: ", reprogram?.week);
    const initDay = departureDate.format("YYYY-MM-DD");
    for (let index = 0; index < daysSchedule + 1; index++) {
      console.log("INDEX: ", index);
      // obtenemos el dia
      const day = moment(initDay).add(index, "days").format("YYYY-MM-DD");
      const aDay = moment(initDay)
        .add(index + daysDifference, "days")
        .format("YYYY-MM-DD");
      const dayWeek = weekDays[moment(day).isoWeekday() - 1];
      console.log("FECHA DE INCIIO: ", initDay);
      console.log("FECHA: ", day);
      // console.log("NUMERO DE SEMANA: ", day.day());
      console.log("DIA DE LA SEMANA: ", dayWeek);

      if (reprogram?.week.includes(dayWeek)) {
        // si en la repgramacion esta el dia de la semana cumplido
        // obtenemos un iD
        const ID = uuidv4();

        // conseguimso el codigo
        const code = await GENERATE_CODE({ id: ID, booking });
        const inputParams = {
          id: ID,
          agencyID: booking?.agencyID,
          officeID: booking?.officeID,
          transport: booking?.transport,
          driver: booking?.driver,
          code: code,
          departure: {
            ...booking?.departure,
            date: day,
          },
          arrival: {
            ...booking?.arrival,
            date: aDay,
          },
          departureCity: booking?.departureCity,
          arrivalCity: booking?.arrivalCity,
          stock: booking?.stock,
          price: totalPrice,
          percentage: percentage,
          createdBy: booking?.createdBy,
          owner: owner,
        };
        const result = await CUSTOM_API_GRAPHQL(createBooking, {
          input: inputParams,
        });
        console.log("RESULTADO DE CREACION MULTIPLE: ", result);
      }
    }
  } else {
    // solo se crea uno
    // // creamos el viaje
    // obtenemos el id del viaje
  }
};

const GENERATE_CODE = async (data) => {
  const { id, booking } = data;
  const { departure } = booking;
  let number = 1;
  let codeBooking = null;
  while (true) {
    codeBooking = `${id
      .slice(0, 5)
      .replace("-", "")
      .toUpperCase()}${departure?.state?.slice(0, 1)}${departure?.city?.slice(
      0,
      1
    )}${number.toString().padStart(2, "0")}`;
    let isExistingCode = await CUSTOM_API_GRAPHQL(getBookingbyCode, {
      code: codeBooking.toUpperCase(),
    });
    if (isExistingCode.data.getBookingbyCode.items.length > 0) {
      number = number + 1;
    } else if (isExistingCode.data.getBookingbyCode.items.length === 0) {
      break;
    }
  }

  return codeBooking.toUpperCase();
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

const MULTIPLE_CREATE_BOOKING = async (
  daysSchedule,
  departureDate,
  reprogram,
  weekDays,
  GENERATE_CODE,
  CUSTOM_API_GRAPHQL,
  booking,
  totalPrice,
  percentage,
  owner
) => {
  const arrivalDate = moment(booking?.arrival?.date).utc(false)
  console.log("FECHA LLEGADAL ", arrivalDate);
  // diferencias entre arrival y departuee
  const daysDifference = arrivalDate.diff(departureDate, "days");
  console.log("DIAS PROGRAMADOS: ", daysSchedule);
  console.log("DIAS ARRAY: ", reprogram?.week);
  console.log("DIFERENCIA de dias entre partida y llegada: ", daysDifference);
  const initDay = departureDate.format("YYYY-MM-DD");

  for (let index = 0; index < daysSchedule + 1; index++) {
    console.log("NRO BUCLE: ", index);
    const day = moment(initDay).add(index, "days").format("YYYY-MM-DD");
    console.log("DIA Salida: ", day);
    const aDay = moment(initDay)
      .add(index + daysDifference, "days")
      .format("YYYY-MM-DD");
    console.log("diA LLEGADA: ", aDay);
    const dayWeek = weekDays[moment(day).isoWeekday() - 1];
    // console.log("NUMERO DE SEMANA: ", day.day());
    console.log("DIA DE LA SEMANA: ", dayWeek);
    if (reprogram?.week.includes(dayWeek)) {
      console.log("DIA A PROGRAMAR: ", dayWeek);
      const ID = uuidv4();

      // conseguimso el codigo
      const code = await GENERATE_CODE({ id: ID, booking });
      const inputParams = {
        id: ID,
        ...booking,
        code: code,
        departure: {
          ...booking?.departure,
          date: day,
        },
        arrival: {
          ...booking?.arrival,
          date: aDay,
        },
        price: totalPrice,
        percentage: percentage,
        owner: owner,
      };
      const result = await CUSTOM_API_GRAPHQL(createBooking, {
        input: inputParams,
      });
      console.log("CODIGO DE VIAJE: ", code);
    }
  }
};