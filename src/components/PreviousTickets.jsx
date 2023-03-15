import { View, Text, Image } from "react-native";
import React from "react";
import CustomDropDown from "@/components/CustomDropDown";
import styles from "@/utils/styles/PreviousTickets.module.css";

const PreviousTickets = () => {
  const global = require('@/utils/styles/global.js');
  const items = [
    { label: "Latest", value: "latest" },
    { label: "Newest", value: "newest" },
  ];
  return (
    <View style={styles.contentPrevious}>
      <View style={styles.leftContentPrevious}>
        <Image
          style={{
            width: 35,
            height: 35,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/previous.png")}
        />
        <Text style={[styles.textContentPrevious, global.black]}>Previous tickets</Text>
      </View>
      <CustomDropDown
        list={items}
        styled={{
          container: styles.picker,
          item: [styles.pickerItem, global.black],
        }}
        global={`plan`}
      />
    </View>
  );
};

export default PreviousTickets;
