import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import { Forgot, Login, Register, Welcome } from "@/screens";
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
        initialRouteName={main.WELCOME}
      >
        <Stack.Screen
          name={main.WELCOME}
          component={Welcome}
          options={{
            headerShown: false,
          }}
          initialParams={{
            LOGIN: main.LOGIN,
            REGISTER: main.REGISTER,
            FORGOT: main.FORGOT,
          }}
        />
        <Stack.Screen
          name={main.LOGIN}
          component={Login}
          initialParams={{
            HOME: main.HOME,
          }}
        />
        <Stack.Screen
          name={main.REGISTER}
          component={Register}
        />
        <Stack.Screen
          name={main.FORGOT}
          component={Forgot}
        />
        <Stack.Screen
          name={main.HOME}
          component={Tabs}
          options={{
            headerBackVisible: false,
            headerTitle: () => <Header />,
          }}
        />
        {routes.map((route) => (
          <Stack.Screen
            name={route.title}
            component={route.component}
            key={route.id}
            options={{
              headerTitle: () => <Header />,
              headerBackButtonMenuEnabled: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
