import { View, Text, Image } from "react-native";
import React from "react";
import CustomDropDown from "@/components/CustomDropDown";
import styles from "@/utils/styles/ActiveTickets.module.css";

const ActiveTickets = () => {
  const items = [
    { label: "Latest", value: "latest" },
    { label: "Newest", value: "newest" },
  ];
  return (
    <View style={styles.contentActive}>
      <View style={styles.leftContentActive}>
        <Image
          style={{
            width: 35,
            height: 35,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/ticket.png")}
        />
        <Text style={styles.textContentActive}>Active tickets</Text>
      </View>
      <CustomDropDown
        list={items}
        styled={{
          container: styles.picker,
          item: styles.pickerItem,
        }}
        global={`plan`}
      />
    </View>
  );
};

export default ActiveTickets;
