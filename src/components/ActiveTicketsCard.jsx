import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/customQueries";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { tasaBCV } from "@/atoms/Modals";
import { useRecoilValue } from "recoil";

const ActiveTicketsCard = ({ data, route, available }) => {
  // console.log("toy aqui", data.total);
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const [agency, setAgency] = useState(null);
  let features = data.booking.transportFeatures;
  const tasa = useRecoilValue(tasaBCV);
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
  }, [route]);
  if (data?.booking !== null)
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate("ViewOrder", {
            order: data?.id,
            payment: data?.paymentID,
            data: data,
            quantity: data?.amount,
            tickets: data?.tickets?.items,
            available: available,
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
              <Text style={[styles.textFormatHour, global.mainColor]}>
                {data.booking.departure.time.slice(0, 5)}
                <MaterialCommunityIcons
                  name="clock-time-ten-outline"
                  size={32}
                  color="black"
                />
              </Text>
              <Text style={[styles.textFormat, global.mainColor]}>
                {data.booking.departure.date}{" "}
                <Octicons name="calendar" size={12} color="black" />{" "}
              </Text>
            </View>
            <View>
              <Text style={[styles.textFrom, global.black]}>Llegada:</Text>
              <Text style={[styles.textDestination, global.black]}>
                {data.booking.arrival.state}, {data.booking.arrival.city}
              </Text>
              <Text style={[styles.textFormatHour, global.mainColor]}>
                {data.booking.arrival.time.slice(0, 5)}
                <MaterialCommunityIcons
                  name="clock-time-ten-outline"
                  size={32}
                  color="black"
                />
              </Text>
              <Text style={[styles.textFormat, global.mainColor]}>
                {data.booking.arrival.date}{" "}
                <Octicons name="calendar" size={12} color="black" />{" "}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View style={{justifyContent: "flex-end"}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {agency?.image ? (
                  <Image
                    style={{
                      width: 32,
                      height: 32,
                      resizeMode: "cover",
                    }}
                    source={{ uri: agency?.image }}
                  />
                ) : (
                  <Ionicons
                    name="ios-person-circle-outline"
                    size={24}
                    color="black"
                  />
                )}
                <View
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "medium",
                      fontSize: 12,
                    }}
                  >
                    Precio:
                  </Text>
                  {/* <View style={[styles.ticketPrice, global.mainBgColorSecond]}> */}
                  {/* <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={24}
                  color="white"
                /> */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-end",
                    }}
                  >
                    {console.log(agency)}
                    <Text style={[styles.ticketText, global.black]}>
                      ${" "}
                      {(
                        data?.booking?.price +
                        (data?.booking?.percentage / 100) * data?.booking?.price
                      ).toFixed(2)}
                    </Text>
                    <Text style={[styles.ticketTextBs, global.black]}>
                      Bs{" "}
                      {(
                        (data?.booking?.price +
                          (data?.booking?.percentage / 100) *
                            data?.booking?.price) *
                        tasa
                      ).toFixed(2)}
                    </Text>
                  </View>

                  {/* </View> */}
                </View>
              </View>
              <Text
                style={{
                  fontFamily: "medium",
                  textTransform: "uppercase",
                  marginTop: 5,
                }}
              >
                {agency?.name}
              </Text>
            </View>
            <View>
              <View
                style={[
                  styles.borderIconBus,
                  global.bgBlack,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 17,
                    marginBottom: 5,
                    marginTop: 10,
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontFamily: "light",
                      marginLeft: 2,
                      textTransform: "capitalize",
                      fontSize: 12,
                    },
                    global.white,
                  ]}
                >
                  {data?.booking?.transport}
                </Text>
                <Ionicons name="ios-bus-outline" size={16} color="white" />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: 13,
                    width: 120,
                    marginBottom: 5,
                  }}
                >
                  Características del bus:
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* {console.log("aqui", features)} */}
                  <Ionicons
                    name="snow-sharp"
                    size={18}
                    color={features.includes("AIRE") ? "#0077B6" : "#1f1f1f"}
                    style={{
                      opacity: features.includes("AIRE") ? 1.0 : 0.3,
                    }}
                  />
                  <MaterialCommunityIcons
                    name="human-male-female"
                    size={20}
                    color={features.includes("BANO") ? "#0077B6" : "#1f1f1f"}
                    style={{
                      opacity: features.includes("BANO") ? 1.0 : 0.3,
                    }}
                  />
                  <Entypo
                    name="power-plug"
                    size={20}
                    color={features.includes("ENCHUFE") ? "#0077B6" : "#1f1f1f"}
                    style={{
                      opacity: features.includes("ENCHUFE") ? 1.0 : 0.3,
                    }}
                  />
                  <Ionicons
                    name="wifi"
                    size={20}
                    color={features.includes("WIFI") ? "#0077B6" : "#1f1f1f"}
                    style={{
                      opacity: features.includes("WIFI") ? 1.0 : 0.3,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default ActiveTicketsCard;
