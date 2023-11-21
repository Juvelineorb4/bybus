import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customQueries from "@/graphql/customQueries";
import * as mutations from "@/graphql/mutations";
import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";

const RouteCard = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const setSearch = useSetRecoilState(planSearch);
  const navigation = useNavigation();
  const [agency, setAgency] = useState([]);
  const Agency = async () => {
    try {
      const query = await API.graphql({
        query: customQueries.getAgency,
        authMode: "AWS_IAM",
        variables: {
          // input: {
          id: data?.agencyID,
          // }
        },
      });
      setAgency(query.data.getAgency.name);
    } catch (error) {
      setAgency(error.data.getAgency.name);
    }
  };
  useEffect(() => {
    Agency();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("CreateTicket", {
          booking: data,
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
              {data.departure.state}, {data.departure.city}
            </Text>
            <Text style={[styles.textFormat, global.green]}>
              {data.departure.date}{" "}
              <Octicons name="calendar" size={12} color="black" />{" "}
              {data.departure.time.slice(0, 5)}
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
              {data.arrival.state}, {data.arrival.city}
            </Text>
            <Text style={[styles.textFormat, global.green]}>
              {data.arrival.date}{" "}
              <Octicons name="calendar" size={12} color="black" />{" "}
              {data.arrival.time.slice(0, 5)}
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
          <Ionicons name="ios-person-circle-outline" size={24} color="black" />
          <Text style={{ fontFamily: "light", marginLeft: 5 }}>{agency}</Text>
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
                marginLeft: 2,
                textTransform: "capitalize",
              },
              global.white,
            ]}
          >
            {data.transport}
          </Text>
          <Ionicons name="ios-bus-outline" size={20} color="white" />
        </View>
        <View style={[styles.ticketPrice, global.mainBgColorSecond]}>
          <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={24}
              color="white"
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
