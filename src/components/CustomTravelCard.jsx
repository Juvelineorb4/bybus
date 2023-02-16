import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/Travel.module.css";
import Icon from "./Icon";

const CustomTravelCard = () => {
  const [active, setActive] = useState(false);
  const handlePress = () => {
    setActive(!active);
  };
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 36,
          height: 36,
          resizeMode: "contain",
        }}
        source={require("@/utils/images/icon.png")}
      />
      <View style={{marginLeft: 10}}>
        <Text style={styles.time}>14:05</Text>
        <View style={{ justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.from}>From</Text>
          <Text style={styles.station}>Terminal Guanare</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handlePress} style={{marginLeft: 10}}>
        {active ? <Icon name={`bell-off-outline`} size={24} color={`#9D9D9D`} /> : <Icon name={`bell-outline`} size={24} color={`#9D9D9D`} /> }
      </TouchableOpacity>
    </View>
  );
};

export default CustomTravelCard;
