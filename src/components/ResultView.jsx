import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/ResultView.module.css";
import { RouteCard } from "@/components";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customQueries from "@/graphql/customQueries";
import * as mutations from "@/graphql/mutations";

const ResultView = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const [search, setSearch] = useState([]);

  const Bookings = async () => {
    const list = await API.graphql({
      query: queries.listBookings,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        filter: {
          and: [
            { departureCity: { eq: data.departureCity } },
            { arrivalCity: { eq: data.arrivalCity } },
          ],
        },
      },
    });
    setSearch(list.data.listBookings.items);
  };
  useEffect(() => {
    if (data) Bookings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, global.black]}>
        Resultados de la busqueda
      </Text>
      <Text style={[styles.titleSearch, global.black]}>
        Viajes disponibles hasta: {`${data.arrivalState}, ${data.arrivalCity}`}
      </Text>
      <TouchableOpacity activeOpacity={1} style={{ marginTop: 20 }}>
        {search && search.map((item, index) => <RouteCard data={item} key={index} />)}
      </TouchableOpacity>
    </View>
  );
};

export default ResultView;
