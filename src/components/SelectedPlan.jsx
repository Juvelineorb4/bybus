import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "@/utils/styles/SelectedPlan.module.css";
import CustomDropDown from "./CustomDropDown";
import { useNavigation } from "@react-navigation/native";

const SelectedPlan = () => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();

  const items = [
    { label: "Adult Ticket", value: "adult-ticket" },
    { label: "Children Ticket", value: "children-ticket" },
  ];

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={[styles.title, global.black]}>Tu viaje seleccionado</Text>
      </View>
      {/* <View style={[styles.line, global.bgWhiteSmoke]} /> */}
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text style={[styles.textHour, global.black]}>14:05</Text>
          
        </View>
        <View style={styles.topTwoContent}>
          <View style={styles.departure}>
            <Text style={[styles.states, global.midGray]}>Lara</Text>
            <Text style={[styles.city, global.topGray]}>Barquisimeto</Text>
          </View>
          <Text style={[styles.to, global.topGray]}>A</Text>
          <View style={styles.destination}>
            <Text style={[styles.states, global.midGray]}>Portuguesa</Text>
            <Text style={[styles.city, global.topGray]}>Guanare</Text>
          </View>
        </View>
        <View style={styles.tags}>
          <View style={styles.guarantees}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/guarantee.png")}
            />
            <Text style={[styles.tagText, global.black]}>
              Garantia de viaje
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedPlan;
