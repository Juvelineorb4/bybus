import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "@/utils/styles/PaymentTicket.module.css";
import { CustomButton } from "@/components";
import PaymentCard from "@/components/Payment/PaymentCard";

const PaymentTicket = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.topContent, global.bgWhite]}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderBottomLeftRadius: 40,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.titleTop, global.black]}>Hora de pagar tu viaje</Text>
          <View style={[styles.ticketsContainer]}>
            <Text style={[styles.titleTickets, global.black]}>2 adults</Text>
            <Text style={[styles.titlePrice, global.black]}>$5.00</Text>
          </View>
        </View>
      </View>
      <View style={[styles.content, global.bgWhite]}>
        <PaymentCard button={true} text="Pagar" />
        <View style={[styles.guarented, global.bgWhiteSoft]}>
          <Image
            style={{
              width: 35,
              height: 35,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/guarented.png")}
          />
          <Text style={[styles.titleGuarented, global.topGray]}>
            Esta compra esta protegida y tiene garantia
          </Text>
          
        </View>
        <CustomButton
          text={`Continue`}
          handlePress={() => navigation.navigate("ViewTicket")}
          textStyles={[styles.textContinue, global.white]}
          buttonStyles={[styles.continue, global.bgBlack]}
        />
      </View>
    </ScrollView>
  );
};

export default PaymentTicket;
