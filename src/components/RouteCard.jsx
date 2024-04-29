import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteCard.module.css";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customQueries from "@/graphql/customQueries";
import * as mutations from "@/graphql/mutations";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import { tasaBCV } from "@/atoms/Modals";

const RouteCard = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const [agency, setAgency] = useState([]);
  let features = data.transportFeatures;
  const tasa = useRecoilValue(tasaBCV);
  const Agency = async () => {
    try {
      const query = await API.graphql({
        query: customQueries.getAgency,
        authMode: "AWS_IAM",
        variables: {
          id: data?.agencyID,
        },
      });
      setAgency(query.data.getAgency);
    } catch (error) {
      setAgency(error.data.getAgency);
    }
  };
  useEffect(() => {
    Agency();
  }, []);

  if (agency)
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

              <Text style={[styles.textFormatHour, global.mainColor]}>
                {data.departure.time.slice(0, 5)}
                <MaterialCommunityIcons
                  name="clock-time-ten-outline"
                  size={32}
                  color="black"
                />
              </Text>
              <Text style={[styles.textFormat, global.mainColor]}>
                {data.departure.date}{" "}
                <Octicons name="calendar" size={12} color="black" />{" "}
              </Text>
            </View>
            <View>
              <Text style={[styles.textFrom, global.black]}>Llegada:</Text>
              <Text style={[styles.textDestination, global.black]}>
                {data.arrival.state}, {data.arrival.city}
              </Text>
              <Text style={[styles.textFormatHour, global.mainColor]}>
                {data.arrival.time.slice(0, 5)}
                <MaterialCommunityIcons
                  name="clock-time-ten-outline"
                  size={32}
                  color="black"
                />
              </Text>
              <Text style={[styles.textFormat, global.mainColor]}>
                {data.arrival.date}{" "}
                <Octicons name="calendar" size={12} color="black" />{" "}
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
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {agency.image ? (
                <Image
                  style={{
                    width: 32,
                    height: 32,
                    resizeMode: "cover",
                    borderRadius: 32
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
                  <Text style={[styles.ticketText, global.black]}>
                    ${" "}
                    {(
                      data.price +
                      (data.percentage / 100) * data.price
                    ).toFixed(2)}
                  </Text>
                  <Text style={[styles.ticketTextBs, global.black]}>
                    Bs{" "}
                    {(
                      (data.price + (data.percentage / 100) * data.price) *
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
                marginTop: 5,
                textTransform: "uppercase",
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
                {data.transport}
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

          {/* <View style={[styles.ticketPrice, global.mainBgColorSecond]}>
          <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={24}
              color="white"
            />
          <Text style={[styles.ticketText, global.black]}>
            {(data.price + ((data.percentage/100) * data.price)).toFixed(2)}$
          </Text>
        </View> */}
        </View>
      </TouchableOpacity>
    );
};

export default RouteCard;
