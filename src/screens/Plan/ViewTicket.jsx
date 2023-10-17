import { ActivityIndicator, Image, ImageBackground, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/ViewTicket.module.css";
import CustomTicket from "@/components/CustomTicket";
import { CustomButton } from "@/components";

const ViewTicket = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { order, payment, data, customer, quantity, tickets } = route.params;
  const total = quantity * data.price;
  console.log(tickets)
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
              {customer.name}
            </Text>
          </View>
          {/* <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.titleTickets2, global.black]}>Cedula</Text>
              <Text style={[styles.titlePrice2, global.black]}>
                {customer.id}
              </Text>
            </View> */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.titleTickets2, global.black]}>Correo</Text>
            <Text style={[styles.titlePrice2, global.black]}>
              {customer.email}
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
              >{`${total}.00$`}</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.titleTop, global.mainColor, { paddingLeft: 20 }]}>
        Tu(s) boleto(s)
      </Text>
      {tickets.length !== 0 ? <View style={styles.ticketContent}>
        {tickets.map((item, index) => (
          <CustomTicket
            data={{
              data: data,
              payment: payment,
              order: order,
              customer: customer,
              ticket: item,
            }}
            key={index}
          />
        ))}
      </View> : <ActivityIndicator size="large" color="#0077B6" style={{marginTop: 50}}/> }
      <View style={styles.buttons}>
        <CustomButton
          text={`Tus boletos`}
          handlePress={() => navigation.navigate("Tickets_Tab")}
          textStyles={[styles.textTickets, global.white]}
          buttonStyles={[styles.tickets, global.bgBlack]}
        />
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

export default ViewTicket;
