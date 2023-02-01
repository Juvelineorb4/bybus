import styles from "@/utils/styles/Welcome.module.css";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
