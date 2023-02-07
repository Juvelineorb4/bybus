import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@/components";
import PlanNavigator from "./PlanNavigator";
import TicketsNavigator from "./TicketsNavigator";
import ProfileNavigator from "./ProfileNavigator";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={`Plan_Tab`}>
      <Tab.Screen
        name={"Plan_Tab"}
        component={PlanNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={`map-outline`} color={color} size={size} />
          ),
          headerShown: false,
          tabBarLabel: 'Plan'
        }}
      />
      <Tab.Screen
        name={"Tickets_Tab"}
        component={TicketsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={`ticket-confirmation-outline`} color={color} size={size} />
          ),
          headerShown: false,
          tabBarLabel: 'Tickets'
        }}
      />
      <Tab.Screen
        name={"Profile_Tab"}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={`account-outline`} color={color} size={size} />
          ),
          headerShown: false,
          tabBarLabel: 'Profile'
        }}
      />
      <Tab.Screen
        name={"Settings_Tab"}
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={`cog-outline`} color={color} size={size} />
          ),
          headerShown: false,
          tabBarLabel: 'Settings'
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
