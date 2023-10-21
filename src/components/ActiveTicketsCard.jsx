import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";

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
                {data.booking.departure.date}
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: "cover",
                  }}
                  source={require("@/utils/images/calendar-black.png")}
                />{" "}
                {data.booking.departure.time.slice(0, 5)}
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
                {data.booking.arrival.state}, {data.booking.arrival.city}
              </Text>
              <Text style={[styles.textFormat, global.green]}>
                {data.booking.arrival.date}
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: "cover",
                  }}
                  source={require("@/utils/images/calendar-black.png")}
                />{" "}
                {data.booking.arrival.time.slice(0, 5)}
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
          <Text style={{fontFamily: 'light', marginLeft: 5, fontSize: 16}}>{agency?.name}</Text>

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
        <Text style={[{fontFamily: 'light', marginLeft: 2, textTransform: 'capitalize'}, global.white]}>{data.booking.transport}</Text>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/bus-white.png")}
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
              {data.booking.price}.00$
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default ActiveTicketsCard;
