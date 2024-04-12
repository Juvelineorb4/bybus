
const nodemailer = require("nodemailer");
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

// const SEND_EMAIL_ZOHO = async (username, claveTemporal) => {
//   // Configurar el transporte

//   let transporter = nodeMailer.createTransport({
//     host: "smtp.zoho.com",
//     secure: true,
//     port: 465,
//     auth: {
//       user: "superadmin@bybusvenezuela.com",
//       pass: "0JWU9RZGrP2c",
//     },
//   });

//   const mailOptions = {
//     from: "superadmin@bybusvenezuela.com", // sender address
//     to: username,
//     subject: `Confirmacion de registro BYBUS C.A.`,
//     text: `
//     Gracia por registrarte como agencia de Bybus C.A.
//     Tu correo es: ${username}
//     Tu contraseña es: ${claveTemporal}
//     Ten en cuenta que esta contraseña es temporal al logearte te pedira que actualices tu contraseña.
//     `,
//   };

//   // Enviar el correo electrónico

//   // Enviar el correo electrónico usando Gmail
//   await new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Error al enviar el correo electrónico:", error);
//         reject(error);
//       } else {
//         console.log("Correo electrónico enviado con éxito:", info);
//         resolve(info);
//       }
//     });
//   });
// };
