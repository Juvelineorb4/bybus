import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  About,
  Introduction,
  Notifications,
  PaymentMethods,
  PaymentView,
  Permissions,
  Settings,
  Terms,
} from "@/screens";
import Header from "../Header/Header";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Settings`}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerBackVisible: false,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Permissions"
        component={Permissions}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Introduction"
        component={Introduction}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="PaymentView"
        component={PaymentView}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
