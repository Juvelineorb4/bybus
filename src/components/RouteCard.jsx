import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customQueries from "@/graphql/customQueries";
import * as mutations from "@/graphql/mutations";

const RouteCard = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const [agency, setAgency] = useState([])
  const Agency = async () => {
    try {
      const query = await API.graphql({
        query: customQueries.getAgency,
        authMode: "AWS_IAM",
        variables: {
          // input: {
            id: data?.agencyID
          // }
        },
      });
      setAgency(query.data.getAgency.name)
    } catch (error) {
      setAgency(error.data.getAgency.name);
    }
  };
  useEffect(() => {
    Agency()
  }, [])
  
  return (
    <TouchableOpacity
      activeOpacity={0.7}
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
      <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/profile_default.png")}
          />
          {/* <Text style={{fontFamily: 'light'}}>Empresa:</Text> */}
          <Text style={{fontFamily: 'light', marginLeft: 5}}>{agency}</Text>

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
        <View style={[styles.lineDashed, { width: 20 }]} />
        <View style={[styles.borderIconBus, global.bgBlack, {flexDirection: 'row', alignItems: 'center'}]}>
        <Text style={[{fontFamily: 'light', marginLeft: 2, textTransform: 'capitalize'}, global.white]}>{data.transport}</Text>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/bus-white.png")}
          />
          
        </View>
        {/* <View style={[styles.lineDashed, { width: 15 }]} /> */}
        {/* <View style={[styles.borderIconWalk, global.bgWhiteSoft]}>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/walk.png")}
          />
        </View> */}
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
