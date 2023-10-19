import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomDropDown from "@/components/CustomDropDown";
import styles from "@/utils/styles/ActiveTickets.module.css";
import ActiveTicketsCard from "./ActiveTicketsCard";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";
import * as mutation from "@/graphql/customMutations";

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
      setListOrders(list.data.listOrderDetails.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onHandlePayment();
  }, []);

  return (
    <ScrollView style={styles.contentActive} showsVerticalScrollIndicator={false}>
      <View style={styles.leftContentActive}>
        <Image
          style={{
            width: 35,
            height: 35,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/ticket.png")}
        />
        <Text style={[styles.textContentActive, global.black]}>
          Ordenes activos
        </Text>
      </View>
      {listOrders.length !== 0 ? listOrders.map((item, index) => (
        <ActiveTicketsCard key={index} data={item} />
      )) : <ActivityIndicator size="large" color="#0077B6" style={{marginTop: 50}}/> }
    </ScrollView>
  );
};

export default ActiveTickets;
