import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/ResultView.module.css";
import { RouteCard } from "@/components";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customQueries from "@/graphql/customQueries";
import * as mutations from "@/graphql/mutations";
import { loadingSearch } from "@/atoms/Modals";
import { useRecoilState } from "recoil";

const ResultView = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useRecoilState(loadingSearch);
  const Bookings = async () => {
    try {
      const list = await API.graphql({
        query: customQueries.listBookings,
        authMode: "AWS_IAM",
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
        setLoading(false);
      console.log(list.data.listBookings);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (data) Bookings();
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, global.black]}>
        Resultados de la busqueda
      </Text>
      <Text style={[styles.titleSearch, global.black]}>
        {`Viajes disponibles hasta: ${data.arrivalState}, ${data.arrivalCity}`}
      </Text>
      <TouchableOpacity activeOpacity={1} style={{ marginTop: 20 }}>
        {loading ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <ActivityIndicator size="large" color="#00B4D8" />
          </View>
        ) : search.length !== 0 ? (
          search.map((item, index) => <RouteCard data={item} key={index} />)
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/search-big.png")}
            />
            <Text
              style={[
                {
                  fontFamily: "thin",
                  textAlign: "center",
                },
                global.black,
              ]}
            >
              {`No hay viajes disponibles hasta: ${data.arrivalState}, ${data.arrivalCity}`}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ResultView;
