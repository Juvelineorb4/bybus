import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/ViewTicket.module.css";
import CustomTicket from "@/components/CustomTicket";
import { CustomButton } from "@/components";

const ViewTicket = ({navigation}) => {
  const global = require("@/utils/styles/global.js");

  return (
    <ScrollView>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        source={require("@/utils/images/background-profile.png")}
      >
        <View style={styles.textContent}>
          <Text style={[styles.titleTop, global.black]}>Your ticket</Text>
          <View style={[styles.ticketsContainer]}>
            <Text style={[styles.titleTickets, global.black]}>2 adults</Text>
            <Text style={[styles.titlePrice, global.black]}>$5.00</Text>
          </View>
        </View>
        <View style={styles.ticketContent}>
          <CustomTicket />
        </View>
        <View style={styles.buttons}>
          <CustomButton
            text={`Your Tickets`}
            textStyles={[styles.textTickets, global.white]}
            buttonStyles={[styles.tickets, global.bgBlack]}
          />
          <CustomButton
            text={`Travel Guarantees`}
            textStyles={[styles.textGuaranted, global.black]}
            buttonStyles={[styles.guaranted, global.mainBgColor]}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ViewTicket;
