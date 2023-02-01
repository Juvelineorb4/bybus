import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { tickets } from "@/utils/constants/tickets";
import styles from "@/utils/styles/Tickets.module.css";

const ChooseTicket = ({ navigation }) => {
  const { routes, buttons } = tickets;
  return (
    <View>
      {buttons.map((button) => (
        <TouchableOpacity
          style={styles.button}
          key={button.id}
          onPress={() => navigation.navigate(routes.create)}
        >
          <Text>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChooseTicket;
