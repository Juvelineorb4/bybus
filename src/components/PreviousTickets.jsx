import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomDropDown from "@/components/CustomDropDown";
import styles from "@/utils/styles/ActiveTickets.module.css";
import ActiveTicketsCard from "./ActiveTicketsCard";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";
import * as mutation from "@/graphql/customMutations";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const PreviousTickets = () => {
  const global = require("@/utils/styles/global.js");
  const [listOrders, setListOrders] = useState([]);
  const onHandlePayment = async (data) => {
    // Crear OrderDetail
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      console.log("QUIERO ESTOS: ", attributes);
      const list = await API.graphql({
        query: queries.getUserOrderDetails,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          id: attributes["custom:userTableID"],
        },
      });

      console.log("ANDALE WEYYYYYY: ", list.data.getUser.orders.items);
      setListOrders(list.data.getUser.orders.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onHandlePayment();
  }, []);
  return (
    <ScrollView
      style={styles.contentActive}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.leftContentActive}>
        <MaterialCommunityIcons
          name="clock-time-ten-outline"
          size={25}
          color="black"
        />
        <Text style={[styles.textContentActive, global.black]}>
          Tickets antiguos
        </Text>
      </View>
      {listOrders.length !== 0 ? (
        listOrders.map(
          (item, index) =>
            item.booking.status === "DEPARTED" && (
              <ActiveTicketsCard key={index} data={item} available={false} />
            )
        )
      ) : (
        <Text style={[{
          fontFamily: 'light',
          fontSize: 22,
          textAlign: 'center',
          marginTop: '30%'
        }, global.black]}>
          No tienes tickets antiguos
        </Text>
      )}
    </ScrollView>
  );
};

export default PreviousTickets;
