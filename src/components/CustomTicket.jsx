import { View, Text, Image } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import styles from "@/utils/styles/CustomTicket.module.css";
import CustomCountDown from "./CustomCountDown";

const CustomTicket = ({ value }) => {
  const global = require("@/utils/styles/global.js");
  const logo = require("@/utils/images/logo-qr.png");
  return (
    <View style={[styles.container, global.bgWhiteSoftTwo]}>
      <View style={styles.ticketContent}>
        <View style={styles.topContent}>
          <Text style={[styles.textHour, global.black]}>14:05</Text>
          <View style={[styles.tagTransport, global.mainBgColor]}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/car.png")}
            />
            <Text style={styles.codeTransporte}>L</Text>
          </View>
        </View>
        <View style={styles.topTwoContent}>
          <View style={styles.departure}>
            <Text style={[styles.states, global.midGray]}>Lara</Text>
            <Text style={[styles.city, global.topGray]}>Barquisimeto</Text>
          </View>
          <Text style={[styles.to, global.topGray]}>To</Text>
          <View style={styles.destination}>
            <Text style={[styles.states, global.midGray]}>Portuguesa</Text>
            <Text style={[styles.city, global.topGray]}>Guanare</Text>
          </View>
        </View>
        <View style={styles.tags}>
          <View style={styles.wifi}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/wifi.png")}
            />
            <Text style={[styles.tagText, global.black]}>Free Wifi</Text>
          </View>
          <View style={styles.guarantees}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/guarantee.png")}
            />
            <Text style={[styles.tagText, global.black]}>
              Travel Guarantees
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={{
          width: "128%",
          height: 38,
          left: -40,
          resizeMode: "contain",
        }}
        source={require("@/utils/images/line-ticket.png")}
      />
      <View style={styles.qrContent}>
        <QRCode
          value={value}
          logo={logo}
          color={"#1f1f1f"}
          backgroundColor={"#F1F1F1"}
          size={250}
        />
      </View>
      <View style={styles.timer}>
        <Text style={styles.expires}>Expires in</Text>
        <CustomCountDown until={86400} />
      </View>
    </View>
  );
};

export default CustomTicket;
