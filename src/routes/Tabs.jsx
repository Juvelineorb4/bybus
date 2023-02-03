import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { routing } from "@/utils/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "@/components";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {tabs} = routing
  return (
    <Tab.Navigator initialRouteName={tabs.inital}>
      {tabs.routes.map((tab) => (
        <Tab.Screen
          name={tab.title}
          component={tab.component}
          key={tab.id}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name={tab.icon} color={color} size={size} />
            ),
            headerShown: false
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;


