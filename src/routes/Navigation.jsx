import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs/Tabs";
import { routing } from "@/utils/constants";
import WelcomeNavigator from "./Welcome/WelcomeNavigator";

const Navigation = () => {
  const { main } = routing;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={main.WELCOME}
      >
        <Stack.Screen
          name={main.WELCOME}
          component={WelcomeNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={main.HOME}
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
