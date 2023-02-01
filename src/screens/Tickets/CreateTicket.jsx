import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Tickets.module.css";

const CreateTicket = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PaymentView")}
      >
        <Text>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTicket;
