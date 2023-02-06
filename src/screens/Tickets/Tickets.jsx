import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { tickets } from "@/utils/constants/tickets";
import styles from "@/utils/styles/Tickets.module.css";
import { Ticket as TicketComponent } from '@/components'

const Tickets = ({ navigation }) => {
  const { routes } = tickets;

  return (
    <View style={{ padding: 5 }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.choose)}
      >
        <Text>Buy Ticket</Text>
      </TouchableOpacity>

      <TicketComponent />

    </View>
  );
};

export default Tickets;

