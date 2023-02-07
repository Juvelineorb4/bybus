import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { List, Plan, Selected } from "@/screens";

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
        name="List"
        component={List}
        options={{
          header: () => <Header mode="with-back" />,
        }}
      />
      <Stack.Screen
        name="Selected"
        component={Selected}
        options={{
          header: () => <Header mode="with-back" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default PlanNavigator;
