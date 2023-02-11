import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header/Header";
import { Edit, Profile } from "@/screens";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Profile`}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerBackVisible: false,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={Edit}
        options={{
          header: () => <Header mode="with-back" />,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;