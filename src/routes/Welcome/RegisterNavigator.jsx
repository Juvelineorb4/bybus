import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { Register } from "@/screens";
import { StepFour, StepOne, StepThree, StepTwo } from "@/components/RegisterSteps";

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Register`}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Register_StepOne"
        component={StepOne}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Register_StepTwo"
        component={StepTwo}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Register_StepThree"
        component={StepThree}
        options={{
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header mode={`back-only`} />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Register_StepFour"
        component={StepFour}
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

export default RegisterNavigator;
