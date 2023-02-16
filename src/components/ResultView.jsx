import { Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Plan.module.css";
import {
  BottomSheetModal,
  RouteSelected,
  CustomDatePicker,
  Icon,
  RouteCard,
} from "@/components";
import { useForm } from "react-hook-form";

const ResultView = ({ navigation }) => {
  return (
    <View style={styles.containerModal}>
      {/* Title */}
      <Text style={styles.titleModal}>Search Result</Text>
      {/* Options */}
      <View style={styles.optionsModal}>
        {/* Date */}
        <View style={styles.optionDateModal}>
          <Text style={styles.textDateModal}>14:00</Text>
          <Icon name={"clock-outline"} color={"black"} size={20} />
        </View>
        {/* Options transport */}
        <View style={styles.optionTransportModal}>
          <View
            style={[
              styles.borderIconModal,
              { backgroundColor: "#F5F5F5", padding: 3 },
            ]}
          >
            <Icon name={"bus"} color={"black"} size={20} />
          </View>
          <Icon name={"chevron-down"} color={"black"} size={20} />
        </View>
      </View>
      {/* Result de busqueda */}
      <TouchableOpacity onPress={() => navigation.navigate("Selected")}>
        <RouteCard />
      </TouchableOpacity>
      <RouteCard />
      <RouteCard />
      <RouteCard />
      <RouteCard />
    </View>
  );
};

export default ResultView;
