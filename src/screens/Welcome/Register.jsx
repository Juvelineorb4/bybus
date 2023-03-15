import { Image, View, Text } from "react-native";
import React from "react";
import styles from "@/utils/styles/Register.module.css";
import { StepOne } from "@/components/RegisterSteps";

const Register = () => {
  const global = require('@/utils/styles/global.js');
  return (
    <View style={[styles.container, global.bgWhite]}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "-35%",
          resizeMode: "contain",
        }}
        source={require("@/utils/images/texture.png")}
      />
      <StepOne />
    </View>
  );
};

export default Register;
