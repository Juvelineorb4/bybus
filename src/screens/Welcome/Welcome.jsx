import styles from "@/utils/styles/Welcome.module.css";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Welcome = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route.params.LOGIN, {
          id: route.params.LOGIN
        })}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route.params.REGISTER)}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route.params.FORGOT)}
      >
        <Text>Forgot</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
