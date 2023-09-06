import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@/components";
import PlanNavigator from "./PlanNavigator";
import TicketsNavigator from "./TicketsNavigator";
import SettingsNavigator from "./SettingsNavigator";
import styles from "@/utils/styles/Tabs.module.css";

const Tab = createBottomTabNavigator();
const global = require('@/utils/styles/global.js');
const { width } = Dimensions.get("window");
const MARGIN = 0;
const TAB_BAR_WIDTH = width - 2 * MARGIN;
const TAB_WIDTH = TAB_BAR_WIDTH / 3;

function MyTabBar({ state, descriptors, navigation }) {
  const [translateX] = useState(new Animated.Value(0));

  const translateTab = (index) => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);
  return (
    <View
      style={[styles.tabBarContainer, global.bgWhite, { width: TAB_BAR_WIDTH, bottom: MARGIN }]}
    >
      <View
        style={{
          width: TAB_WIDTH,
          ...StyleSheet.absoluteFillObject,
          alignItems: "center",
        }}
      >
        <Animated.View
          style={[styles.slidingTab, global.mainBgColorSecond, { transform: [{ translateX }] }]}
        />
      </View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const tabBarIcon = options.tabBarIcon;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{ flex: 1, alignItems: "center" }}
          >
            <TabIcon
              tabIcon={tabBarIcon}
              isFocused={isFocused}
              label={label}
              index={state.index}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabIcon = ({ isFocused, tabIcon, label, index }) => {
  const [translateY] = useState(new Animated.Value(0));

  const translateIcon = (val) => {
    Animated.spring(translateY, {
      toValue: val,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFocused) {
      translateIcon(-15);
    } else {
      translateIcon(0);
    }
  }, [index]);
  return (
    <>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Image
          style={{
            width: 33,
            height: 33,
            resizeMode: "contain",
          }}
          source={isFocused ? tabIcon.activeIcon : tabIcon.activeIcon}
        />
      </Animated.View>
      <Text
        style={{
          color: isFocused ? "#261F3C" : "#404040",
          fontSize: 12,
          fontFamily: "light",
          fontWeight: "thin",
          marginTop: -2
        }}
      >
        {label}
      </Text>
    </>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName={`Plan_Tab`}
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true
      }}
    >
      <Tab.Screen
        name={"Plan_Tab"}
        component={PlanNavigator}
        key={`Plan_Tab`}
        options={{
          tabBarIcon: {
            activeIcon: require("@/utils/images/plan.png"),
            inActiveIcon: require("@/utils/images/plan.png"),
          },
          headerShown: false,
          tabBarLabel: "Busca tu viaje",
        }}
      />
      <Tab.Screen
        name={"Tickets_Tab"}
        key={`Tickets_Tab`}
        component={TicketsNavigator}
        options={{
          tabBarIcon: {
            activeIcon: require("@/utils/images/ticket.png"),
            inActiveIcon: require("@/utils/images/ticket.png"),
          },
          headerShown: false,
          tabBarLabel: "Mis tickets",
        }}
      />
      {/* <Tab.Screen
        name={"Profile_Tab"}
        key={`Profile_Tab`}
        component={ProfileNavigator}
        options={{
          tabBarIcon: {
            activeIcon: require("@/utils/images/profile.png"),
            inActiveIcon: require("@/utils/images/profile.png"),
          },
          headerShown: false,
          tabBarLabel: "Profile",
        }}
      /> */}
      <Tab.Screen
        name={"Settings_Tab"}
        key={`Settings_Tab`}
        component={SettingsNavigator}
        options={{
          tabBarIcon: {
            activeIcon: require("@/utils/images/profile.png"),
            inActiveIcon: require("@/utils/images/profile.png"),
          },
          headerShown: false,
          tabBarLabel: "Configuración",
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
