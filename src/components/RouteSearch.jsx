import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/RouteSearch.module.css";
import CustomTimeDatePicker from "./CustomTimeDatePicker";
import { venezuela } from "@/utils/constants/venezuela";
import CustomModalDeparture from "./CustomModalDeparture";
import CustomModalArrival from "./CustomModalArrival";
import { useRecoilValue } from "recoil";
import { routeSearch } from "@/atoms/Modals";
// import { dateRoute, timeRoute } from "@/atoms/Modals";

const RouteSearch = ({ control, handleSubmit, watch, collapsed = false }) => {
  const global = require("@/utils/styles/global.js");
  const route = useRecoilValue(routeSearch);

  useEffect(() => {
    console.log(route);
  }, [route]);

  return (
    <View style={[styles.container, global.bgBlack]}>
      <View style={styles.inputs}>
        <CustomModalDeparture
          control={control}
          name={`departure`}
          label={`Salida`}
          placeholder={`Seleccione su salida`}
          data={venezuela}
        />

        <CustomModalArrival
          control={control}
          name={`arrival`}
          label={`Llegada`}
          placeholder={`Seleccione la llegada`}
          data={venezuela}
        />
      </View>
      <View style={styles.options}>
        <CustomTimeDatePicker
          styled={{
            container: styles.containerDatetime,
            border: styles.borderDatetime,
            text: [styles.textDatetime, global.white],
          }}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.search, global.mainBgColor]}
        >
          <Image
            style={{
              width: 32,
              height: 32,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/search-black.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RouteSearch;
