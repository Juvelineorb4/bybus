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
    <Tab.Navigator
      initialRouteName={`Plan_Tab`}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          height: 65,
          paddingBottom: 10,
          paddingTop: 10
        },
      }}
    >
      <Tab.Screen
        name={"Plan_Tab"}
        component={PlanNavigator}
        options={{
          tabBarActiveTintColor: "#1A1528",
          tabBarInactiveTintColor: "#404040",
          tabBarIcon: ({ color, size }) => (
            <Icon name={`map-outline`} color={color} size={size} />
          ),
          headerShown: false,
          tabBarLabel: "Plan",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name={"Tickets_Tab"}
        component={TicketsNavigator}
        options={{
          tabBarActiveTintColor: "#1A1528",
          tabBarInactiveTintColor: "#404040",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={`ticket-confirmation-outline`}
              color={color}
              size={size}
            />
          ),
          headerShown: false,
          tabBarLabel: "Tickets",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name={"Profile_Tab"}
        component={ProfileNavigator}
        options={{
          tabBarActiveTintColor: "#1A1528",
          tabBarInactiveTintColor: "#404040",
          tabBarIcon: ({ color, size }) => (
            <Icon name={`account-outline`} color={color} size={size} />
          ),
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name={"Settings_Tab"}
        component={SettingsNavigator}
        options={{
          tabBarActiveTintColor: "#1A1528",
          tabBarInactiveTintColor: "#404040",
          tabBarIcon: ({ color, size }) => (
            <Icon name={`cog-outline`} color={color} size={size} />
          ),
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
