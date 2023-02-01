import styles from "@/utils/styles/global";
import React from "react";
import { Button, Text, View } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        style={styles.button}
        title="Continue"
        onPress={() => navigation.navigate('Home')}
      ></Button>
    </View>
  );
};

export default Welcome;
