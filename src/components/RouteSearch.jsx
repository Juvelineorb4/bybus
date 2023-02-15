import { View, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/utils/styles/RouteSearch.module.css";
import CustomTimePicker from "./CustomTimeDatePicker";

const RouteSearch = ({ control, handleSubmit, watch, collapsed = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <Image
            style={{
              width: 28,
              height: 28,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/target-white.png")}
          />
          <TextInput
            style={styles.inputText}
            placeholder={`Barquisimeto, Lara`}
            placeholderTextColor={`#9d9d9d`}
          />
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/close.png")}
          />
        </View>
        <View style={styles.input}>
          <Image
            style={{
              width: 28,
              height: 28,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/destination-white.png")}
          />
          <TextInput
            style={styles.inputText}
            placeholder={`Guanare, Portuguesa`}
            placeholderTextColor={`#9d9d9d`}
          />
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/arrow-white.png")}
          />
        </View>
      </View>
      <View style={styles.options}>
        <CustomTimePicker />
        <TouchableOpacity activeOpacity={1} style={styles.search}>
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
