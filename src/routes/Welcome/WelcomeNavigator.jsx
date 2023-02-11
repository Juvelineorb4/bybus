import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { Forgot, Introduction, Login, Welcome } from "@/screens";
import RegisterNavigator from "./RegisterNavigator";
import FirtsTime from "@/screens/Welcome/FirtsTime";
import Strip from "@/screens/Welcome/Strip";
import ForgotNavigator from "./ForgotNavigator";


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


const Stack = createNativeStackNavigator();

const WelcomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Welcome`}>
      <Stack.Screen
        name={"Welcome"}
        component={Welcome}
        options={{
          headerShown: false,
        }}
        initialParams={{
          LOGIN: "Login",
          REGISTER: "Register_App",
        }}
      />
      <Stack.Screen
        name={"Login"}
        component={Login}
        initialParams={{
          HOME: "Home",
        }}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name={"Welcome_Start"}
        component={FirtsTime}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"Strip"}
        component={Strip}
        initialParams={{
          HOME: "Home",
        }}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
        }}
      />
      <Stack.Screen
        name={"Register_App"}
        component={RegisterNavigator}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name={"Forgot_App"}
        component={ForgotNavigator}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeNavigator;
