import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";

const RouteCard = () => {
  const global = require('@/utils/styles/global.js');
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <View>
          <Text style={[styles.textHour, global.black]}>14:05</Text>
          <Text style={[styles.textDate, global.midGray]}>13/02/23</Text>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={[styles.textFrom, global.midGray]}>From</Text>
          <Text style={[styles.textDestination, global.black]}>Terminal Guanare</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View style={styles.borderIconWalk}>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/walk.png")}
          />
        </View>
        <View style={[styles.lineDashed, { width: 30 }]} />
        <View style={[styles.borderIconBus, global.bgBlack]}>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/bus-white.png")}
          />
        </View>
        <View style={[styles.lineSolid, { width: 40 }]} />
        <View style={[styles.borderIconWalk, global.bgWhiteSoft]}>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/walk.png")}
          />
        </View>
        <View style={[styles.ticketPrice, global.mainBgColorSecond]}>
          <Image
            style={{
              width: 26,
              height: 26,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/ticket.png")}
          />
          <Text style={[styles.ticketText, global.black]}>5.00$</Text>
        </View>
      </View>
    </View>
  );
};

export default RouteCard;
