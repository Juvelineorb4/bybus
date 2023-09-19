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
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { planSearch, routeSearch, loadingSearch } from "@/atoms/Modals";
// import { dateRoute, timeRoute } from "@/atoms/Modals";

const RouteSearch = () => {
  const global = require("@/utils/styles/global.js");
  const { control } = useForm();
  const route = useRecoilValue(routeSearch);
  const [result, setResult] = useRecoilState(planSearch);
  const [loading, setLoading] = useRecoilState(loadingSearch);

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
          style={[styles.search, global.mainBgColorSecond]}
          onPress={() => {
            setResult({
              time: route?.time,
              date: route?.date,
              departureState: route?.departureState?.estado,
              departureCity: route?.departureCity,
              arrivalState: route?.arrivalState?.estado,
              arrivalCity: route?.arrivalCity,
              active: true,
            });
            setLoading(true)
          }}
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
