import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { Tickets } from "@/screens";
import ViewOrder from "@/screens/Tickets/ViewOrder";

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
        name="ViewOrder"
        component={ViewOrder}
        options={{
          header: () => <Header mode="with-back" />,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default TicketsNavigator;