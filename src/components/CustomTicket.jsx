import { View, Text, Image } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import styles from "@/utils/styles/CustomTicket.module.css";
import CustomCountDown from "./CustomCountDown";

const CustomTicket = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const logo = require("@/utils/images/logo-qr.png");
  return (
    <View style={[styles.container, global.bgWhiteSoftTwo]}>
      <View style={styles.ticketContent}>
        <View style={styles.topContent}>
          <Text style={[styles.textHour, global.black]}>{data.data.arrival.time.slice(0, 5)}</Text>
          <View style={[styles.tagTransport, global.mainBgColor]}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/car.png")}
            />
            <Text style={styles.codeTransporte}>XYZ-000</Text>
          </View>
        </View>
        <View style={styles.topTwoContent}>
          <View style={styles.departure}>
            <Text style={[styles.states, global.midGray]}>{data.data.departure.state}</Text>
            <Text style={[styles.city, global.topGray]}>{data.data.departure.city}</Text>
          </View>
          <Text style={[styles.to, global.topGray]}>Hasta</Text>
          <View style={styles.destination}>
            <Text style={[styles.states, global.midGray]}>{data.data.arrival.state}</Text>
            <Text style={[styles.city, global.topGray]}>{data.data.arrival.city}</Text>
          </View>
        </View>
        <View style={styles.tags}>
          <View style={styles.wifi}>
          <Text style={[styles.tagText, global.black]}>
              Su orden de transaccion: {data.payment}
            </Text>
          </View>
          <View style={styles.guarantees}>
            
            <Text style={[styles.tagText, global.black]}>
              Su orden de viaje: {data.order}
            </Text>
          </View>
        </View>
      </View>
      {/* <Image
        style={{
          width: "128%",
          height: 38,
          left: -40,
          resizeMode: "contain",
        }}
        source={require("@/utils/images/line-ticket.png")}
      /> */}
      <View style={styles.qrContent}>
        <QRCode
          value={data.order}
          logo={logo}
          color={"#1f1f1f"}
          backgroundColor={"#F1F1F1"}
          size={250}
        />
      </View>
      <View style={styles.timer}>
        {/* <Text style={styles.expires}>Expira en</Text> */}
        {/* <CustomCountDown until={86400} /> */}
      </View>
    </View>
  );
};

export default CustomTicket;
