import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";

const RouteCard = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate("CreateTicket", {
        booking: data
      })}
      style={styles.container}
    >
      <View style={styles.containerText}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={[styles.textFrom, global.black]}>Salida:</Text>
            <Text style={[styles.textDestination, global.black]}>
              {data.departure.state}, {data.departure.city}
            </Text>
            <Text style={[styles.textFormat, global.black]}>
              {data.departure.date}
              <Image
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/calendar-black.png")}
              />
              {' '} {data.departure.time.slice(0, 5)}
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/clock-black.png")}
              />
            </Text>
          </View>
          <View>
            <Text style={[styles.textFrom, global.black]}>Llegada:</Text>
            <Text style={[styles.textDestination, global.black]}>
              {data.arrival.state}, {data.arrival.city}
            </Text>
            <Text style={[styles.textFormat, global.black]}>
              {data.arrival.date} 
              <Image
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/calendar-black.png")}
              />
              {' '}
              {data.arrival.time.slice(0, 5)}
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/clock-black.png")}
              />
            </Text>
          </View>
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
          <Text style={[styles.ticketText, global.black]}>
            {data.price}.00$
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RouteCard;
