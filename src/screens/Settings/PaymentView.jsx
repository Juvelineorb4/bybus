import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { tickets } from "@/utils/constants/tickets";
import styles from "@/utils/styles/Settings.module.css";

const PaymentView = ({ navigation }) => {
  const { routes } = tickets;
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.view)}
      >
        <Text>Complete your purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentView;
