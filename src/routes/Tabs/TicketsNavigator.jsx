import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { Tickets } from "@/screens";

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
    </Stack.Navigator>
  );
};

export default TicketsNavigator;