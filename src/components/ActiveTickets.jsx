import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomDropDown from "@/components/CustomDropDown";
import styles from "@/utils/styles/ActiveTickets.module.css";
import ActiveTicketsCard from "./ActiveTicketsCard";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";
import * as mutation from "@/graphql/customMutations";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const ActiveTickets = ({route}) => {
  const global = require("@/utils/styles/global.js");
  const [listOrders, setListOrders] = useState([]);
  
  const onHandlePayment = async (data) => {
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

      console.log("ANDALE WEYYYYYY: ", list.data.getUser.orders.items.length);
      setListOrders(list.data.getUser.orders.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onHandlePayment();
    console.log(listOrders.length)
  }, [route]);

  return (
    <ScrollView
      style={styles.contentActive}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.leftContentActive}>
        {/* <Image
          style={{
            width: 35,
            height: 35,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/ticket.png")}
        /> */}
        <MaterialCommunityIcons name="ticket-confirmation-outline" size={28} color="black" />
        <Text style={[styles.textContentActive, global.black]}>
          Tickets activos
        </Text>
      </View>
      {listOrders.length !== 0 ? (
        listOrders.map(
          (item, index) =>
            (item.booking.status === "SOLDOUT" || item.booking.status === "AVAILABLE")  && (
              <ActiveTicketsCard key={index} data={item} route={route} />
            )
        )
      ) : (
        <ActivityIndicator
          size="large"
          color="#0077B6"
          style={{ marginTop: 50 }}
        />
      )}
    </ScrollView>
  );
};

export default ActiveTickets;
