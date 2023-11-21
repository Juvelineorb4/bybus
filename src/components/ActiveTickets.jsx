import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomDropDown from "@/components/CustomDropDown";
import styles from "@/utils/styles/ActiveTickets.module.css";
import ActiveTicketsCard from "./ActiveTicketsCard";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";
import * as mutation from "@/graphql/customMutations";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const ActiveTickets = () => {
  const global = require("@/utils/styles/global.js");
  const [listOrders, setListOrders] = useState([]);
  const onHandlePayment = async (data) => {
    // Crear OrderDetail
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      const list = await API.graphql({
        query: queries.listOrderDetails,
        authMode: "AWS_IAM",
        variables: {
          input: {
            userID: attributes.sub,
          },
        },
      });
      console.log("aqui", list.data.listOrderDetails.items[0].booking.status);
      setListOrders(list.data.listOrderDetails.items);
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
            item.booking.status !== "DEPARTED" && (
              <ActiveTicketsCard key={index} data={item} />
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
