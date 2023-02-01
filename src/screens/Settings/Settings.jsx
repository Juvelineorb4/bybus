import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { settings } from "@/utils/constants/settings";

const Settings = ({ navigation }) => {
  const { buttons } = settings;
  return (
    <View>
      <Text>Settings</Text>
      {buttons.map((button) => (
        <Button
          style={styles.button}
          title={button.title}
          key={button.id}
          onPress={() => navigation.navigate(button.route)}
        ></Button>
      ))}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
