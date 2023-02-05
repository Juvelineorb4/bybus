import { Image, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Register.module.css";
import StepFour from "@/components/RegisterSteps/StepFour";

const Register = () => {
  return (
    <View style={styles.container}>
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
      <StepFour />
    </View>
  );
};

export default Register;
