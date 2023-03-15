import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { ChooseTicket, CreateTicket, Tickets, ViewTicket } from "@/screens";
import PaymentTicket from "@/screens/Tickets/PaymentTicket";

const Stack = createNativeStackNavigator();

const TicketsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Tickets`}>
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{
          headerBackVisible: false,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="ChooseTicket"
        component={ChooseTicket}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="CreateTicket"
        component={CreateTicket}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="PaymentTicket"
        component={PaymentTicket}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="ViewTicket"
        component={ViewTicket}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default TicketsNavigator;