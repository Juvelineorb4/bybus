const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const promises = event.Records.map(async (record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
    if (record.eventName === "INSERT") {
      const dataJson = convertDynamoDBType(record.dynamodb.NewImage);
      console.log("JSON DBS: ", dataJson);

      // Agrega esta línea para enviar el correo electrónico con la plantilla HTML
      await SEND_EMAIL_ZOHO(dataJson);
    }
  });

  await Promise.all(promises);

  return "Successfully processed DynamoDB record";
};

function convertDynamoDBType(item) {
  const newItem = {};

  for (const key in item) {
    const valueType = Object.keys(item[key])[0];
    const value = item[key][valueType];

    newItem[key] = value;
  }

  return newItem;
}

const SEND_EMAIL_ZOHO = async (data) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: "superadmin@bybusvenezuela.com",
      pass: "0JWU9RZGrP2c",
    },
  });

  // Aquí es donde creamos la plantilla HTML
  const htmlTemplate = `
  <h2>Solicitud de la agencia <strong>${data.name} - ${data.rif}</strong> para unirse a ByBus!!</h2>
<p>Estimado equipo,</p>
<p>Me complace informarles que la agencia <strong>${data.name}</strong> ha solicitado unirse a nuestra red de agencias de viajes.</p>
<h3>Detalles de la agencia:</h3>
<ul>
<li>Nombre: <strong>${data.name}</strong></li>
<li>Número de teléfono: ${data.phone}</li>
<li>Correo electrónico: ${data.email}</li>
<li>Número RIF: ${data.rif}</li>
</ul>
<p>Se solicita al equipo que se comunique con la agencia <strong>${data.name}</strong> lo antes posible para:</p>
<ol>
<li>Darles la bienvenida y agradecerles su interés en unirse a nuestra red.</li>
<li>Solicitar información adicional sobre su agencia, como sus servicios, experiencia y áreas de especialización.</li>
<li>Discutir el proceso de membresía y los requisitos necesarios.</li>
<li>Responder a cualquier pregunta que pueda tener la agencia.</li>
</ol>
<p>Por favor, comuníquense con la agencia <strong>${data.name}</strong> a la brevedad posible y bríndenles la información y el apoyo que necesitan.</p>
`;

  const mailOptions = {
    from: "superadmin@bybusvenezuela.com",
    to: "superadmin@bybusvenezuela.com",
    subject: `Solicitud de la agencia ${data.name} - ${data.rif} para unirse a ByBus!!`,
    html: htmlTemplate, // Usamos la plantilla HTML aquí
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error al enviar el correo electrónico:", error);
        reject(error);
      } else {
        console.log("Correo electrónico enviado con éxito:", info);
        resolve(info);
      }
    });
  });
};
