import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { tickets } from "@/utils/constants/tickets";
import styles from "@/utils/styles/Tickets.module.css";

const Tickets = ({ navigation }) => {
  const { routes } = tickets;

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.choose)}
      >
        <Text>Buy Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tickets;

