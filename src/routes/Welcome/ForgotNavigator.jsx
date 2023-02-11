import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { Forgot } from "@/screens";
import ChangePassword from "@/screens/Welcome/ChangePassword";

const Stack = createNativeStackNavigator();

const ForgotNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Forgot`}>
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default ForgotNavigator;
