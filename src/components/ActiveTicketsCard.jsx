import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";
import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";

const ActiveTicketsCard = ({ data }) => {
  // console.log('toy aqui',data?.orderTickets?.items[0]?.ticket);
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const [agency, setAgency] = useState(null);
  const onHandleTicket = async () => {
    try {
      const dataAgency = await API.graphql({
        query: queries.getAgency,
        authMode: "AWS_IAM",
        variables: {
          id: data.booking.agencyID,
        },
      });
      setAgency(dataAgency.data.getAgency);
      // setTicket(list.data.listOrderDetails.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onHandleTicket();
  }, []);
  if (data?.booking !== null)
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate("ViewOrder", {
            order: data?.id,
            payment: data?.paymentID,
            data: data?.booking,
            quantity: data?.amount,
            tickets: data?.orderTickets?.items,
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
                {data.booking.departure.state}, {data.booking.departure.city}
              </Text>
              <Text style={[styles.textFormat, global.green]}>
                {data.booking.departure.date}{" "}
                <Octicons name="calendar" size={12} color="black" />{" "}
                {data.booking.departure.time.slice(0, 5)}
                <MaterialCommunityIcons
                  name="clock-time-ten-outline"
                  size={13}
                  color="black"
                />
              </Text>
            </View>
            <View>
              <Text style={[styles.textFrom, global.black]}>Llegada:</Text>
              <Text style={[styles.textDestination, global.black]}>
                {data.booking.arrival.state}, {data.booking.arrival.city}
              </Text>
              <Text style={[styles.textFormat, global.green]}>
                {data.booking.arrival.date}{" "}
                <Octicons name="calendar" size={12} color="black" />{" "}
                {data.booking.arrival.time.slice(0, 5)}
                <MaterialCommunityIcons
                  name="clock-time-ten-outline"
                  size={13}
                  color="black"
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
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="ios-person-circle-outline"
              size={24}
              color="black"
            />
            <Text
              style={{ fontFamily: "regular", marginLeft: 5, fontSize: 16 }}
            >
              {agency?.name}
            </Text>
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
            <Ionicons name="ios-walk-outline" size={24} color="black" />
          </View>
          <View style={[styles.lineDashed, { width: 35 }]} />
          <View
            style={[
              styles.borderIconBus,
              global.bgBlack,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                {
                  fontFamily: "light",
                  marginHorizontal: 2,
                  textTransform: "capitalize",
                },
                global.white,
              ]}
            >
              {data.booking.transport}
            </Text>
            <Ionicons name="ios-bus-outline" size={20} color="white" />
          </View>
          <View style={[styles.ticketPrice, global.mainBgColor]}>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={24}
              color="white"
            />
            <Text style={[styles.ticketText, global.white]}>
              {data.booking.price}.00$
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default ActiveTicketsCard;
