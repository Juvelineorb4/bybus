import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";

const ActiveTicketsCard = ({ data }) => {
  console.log(data.orderTickets.items);
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const [travel, setTravel] = useState(null);
  const onHandleTicket = async () => {
    try {
      const booking = await API.graphql({
        query: queries.listBookings,
        authMode: "AWS_IAM",
        variables: {
          input: {
            id: data.bookingID,
          },
        },
      });
      setTravel(booking.data.listBookings.items[0]);
      // setTicket(list.data.listOrderDetails.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onHandleTicket();
  }, []);
  if (travel !== null)
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate("ViewOrder", {
            order: data.id,
            payment: data.paymentID,
            data: travel,
            customer: { name: data.customerName, email: data.customerEmail },
            quantity: data.amount,
            tickets: data.orderTickets.items,
          })
        }
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
                {travel.departure.state}, {travel.departure.city}
              </Text>
              <Text style={[styles.textFormat, global.black]}>
                {travel.departure.date}
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: "cover",
                  }}
                  source={require("@/utils/images/calendar-black.png")}
                />{" "}
                {travel.departure.time.slice(0, 5)}
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
                {travel.arrival.state}, {travel.arrival.city}
              </Text>
              <Text style={[styles.textFormat, global.black]}>
                {travel.arrival.date}
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: "cover",
                  }}
                  source={require("@/utils/images/calendar-black.png")}
                />{" "}
                {travel.arrival.time.slice(0, 5)}
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
              {travel.price}.00$
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default ActiveTicketsCard;
