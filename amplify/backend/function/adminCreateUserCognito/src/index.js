/* Amplify Params - DO NOT EDIT
	AUTH_BYBUSAUTH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.REGION });
const cognito = new AWS.CognitoIdentityServiceProvider();
const ses = new AWS.SES();
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const { username, password, rif, phone, userType, name } =
    event.arguments.input;

    // parametros de registro de usuario de agencia 
  const params = {
    UserPoolId: process.env.AUTH_BYBUSAUTH_USERPOOLID, // Reemplaza con el ID de tu User Pool
    Username: username,
    TemporaryPassword: password,
    MessageAction: "SUPPRESS", // Evita el envío de código de confirmación
    UserAttributes: [
      {
        Name: "email",
        Value: username,
      },
      {
        Name: "name",
        Value: name,
      },
      {
        Name: "custom:rif",
        Value: rif,
      },
      {
        Name: "custom:phone",
        Value: phone,
      },
      {
        Name: "custom:temporaryPassword",
        Value: password,
      },
      {
        Name: "custom:userType",
        Value: userType,
      },
      {
        Name: "email_verified",
        Value: "true",
      },
    ],
  };
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log("EJELE:", process.env.AUTH_BYBUSAUTH_USERPOOLID);

  const response = await cognito.adminCreateUser(params).promise();
  var paramsGroup = {
    GroupName: "agency",
    UserPoolId: process.env.AUTH_BYBUSAUTH_USERPOOLID,
    Username: response.User.Username,
  };
  await cognito.adminAddUserToGroup(paramsGroup).promise();

  const paramsSES = {
    Source: "support@bybusvenezuela.com" /* required */,
    Destination: {
      /* required */
      ToAddresses: [
        `${username}`,
        /* more items */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Text: {
          Charset: "UTF-8",
          Data: `
          Gracia por registrarte como agencia de Bybus C.A.
          Tu correo es: ${username}
          Tu contraseña es: ${password}
          Ten en cuenta que esta contraseña es temporal al logearte te pedira que actualices tu contraseña.
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Confirmacion de registro BYBUS C.A.",
      },
    },
  };

  await ses.sendEmail(paramsSES).promise();

  return JSON.stringify({
    message: "Usuario registrado exitosamente.",
    data: response,
  });
};
