import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { settings } from "@/utils/constants/settings";
import styles from "@/utils/styles/Settings.module.css";


const Settings = ({ navigation }) => {
  const { buttons } = settings;
  return (
    <View>
      <Text>Settings</Text>
      {buttons.map((button) => (
        <TouchableOpacity
          style={styles.button}
          key={button.id}
          onPress={() => navigation.navigate(button.route)}
        >
          <Text>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Settings;

