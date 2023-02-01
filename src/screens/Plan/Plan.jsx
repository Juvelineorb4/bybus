import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Plan.module.css";

const Plan = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text>List Plans</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Plan;
