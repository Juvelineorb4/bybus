import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import { Welcome } from "@/screens";
import { routing } from "@/utils/constants";
import Header from "./Header";

const Navigation = () => {
  const { main, routes } = routing;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          cardStyle: {
            backgroundColor: "red",
          },
        }}
        initialRouteName={main.initial}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerBackVisible: false,
            headerTitle: () => (<Header/>)
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        {routes.map((route) => (
          <Stack.Screen
            name={route.title}
            component={route.component}
            key={route.id}
            options={{
              headerTitle: () => (<Header/>),
              headerBackButtonMenuEnabled: false
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
