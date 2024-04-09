import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/ViewTicket.module.css";
import CustomTicket from "@/components/CustomTicket";
import { CustomButton } from "@/components";

const ViewOrder = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { order, payment, data, quantity, tickets, available } = route?.params;
  const total =
    quantity *
    (data?.booking?.price + data?.booking?.price / data?.booking?.percentage);
  console.log(data.booking);
  const openWhatsApp = () => {
    let phoneNumber = "+58 426-5523463"; // Reemplaza esto con el número de teléfono deseado
    let message = "Hola, quisiera devolver un ticket que compre"; // Reemplaza esto con el mensaje deseado
    let url = "whatsapp://send?text=" + message + "&phone=" + phoneNumber;

    Linking.openURL(url).catch((err) =>
      console.error("No se pudo abrir WhatsApp", err)
    );
  };
  console.log("EJELEÑ ", available);
  return (
    <ScrollView style={[global.bgWhite]}>
      {/* <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        source={require("@/utils/images/background-profile.png")}
      > */}
      <View style={styles.textContent}>
        <Text style={[styles.titleTop, global.mainColor]}>
          Detalles de la orden
        </Text>
        <View style={[styles.ticketsContainer]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.titleTickets2, global.black]}>Nombre</Text>
            <Text style={[styles.titlePrice2, global.black]}>
              {data?.customerName}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.titleTickets2, global.black]}>Correo</Text>
            <Text style={[styles.titlePrice2, global.black]}>
              {data?.customerEmail}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={[styles.titleTickets, global.black]}>Total</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.titleTickets, global.black]}>
                {quantity} x
              </Text>
              <Text
                style={[styles.titlePrice, global.black]}
              >{`${total}$`}</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.titleTop, global.mainColor, { paddingLeft: 20 }]}>
        Tu(s) boleto(s)
      </Text>
      {tickets.length !== 0 ? (
        <View style={styles.ticketContent}>
          {tickets.map((item, index) => (
            <CustomTicket
              data={{
                data: data.booking,
                payment: payment,
                order: order,
                customer: {
                  name: item?.customer?.fullName,
                  email: item?.customer?.email,
                  id: item?.customer?.ci,
                },
                ticket: item?.id,
              }}
              key={index}
            />
          ))}
        </View>
      ) : (
        <ActivityIndicator
          size="large"
          color="#0077B6"
          style={{ marginTop: 50 }}
        />
      )}
      <View style={styles.buttons}>
        {available ? (
          <CustomButton
            text={`Devolucion`}
            handlePress={() => openWhatsApp()}
            textStyles={[styles.textTickets, global.white]}
            buttonStyles={[styles.tickets, global.bgBlack]}
          />
        ) : (
          <CustomButton
            text={`Tus boletos`}
            handlePress={() => navigation.navigate("Tickets_Tab")}
            textStyles={[styles.textTickets, global.white]}
            buttonStyles={[styles.tickets, global.bgBlack]}
          />
        )}
        <CustomButton
          text={`Terminos y condiciones`}
          textStyles={[styles.textGuaranted, global.white]}
          buttonStyles={[styles.guaranted, global.mainBgColor]}
        />
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
};

export default ViewOrder;
