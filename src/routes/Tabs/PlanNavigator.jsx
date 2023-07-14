import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { CreateTicket, Plan, ViewTicket, PaymentTicket } from "@/screens";

const Stack = createNativeStackNavigator();

const PlanNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Plan`}>
      <Stack.Screen
        name="Plan"
        component={Plan}
        options={{
          headerBackVisible: false,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="CreateTicket"
        component={CreateTicket}
        options={{
          header: () => <Header mode="with-back" />,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="PaymentTicket"
        component={PaymentTicket}
        options={{
          header: () => <Header mode="with-back" />,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ViewTicket"
        component={ViewTicket}
        options={{
          header: () => <Header mode="with-back" />,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default PlanNavigator;
