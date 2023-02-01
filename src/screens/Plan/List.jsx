import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Plan.module.css";

const List = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Selected")}
      >
        <Text>Selected</Text>
      </TouchableOpacity>
    </View>
  );
};

export default List;
