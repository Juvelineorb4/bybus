import { Image, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Register.module.css";
import StepOne from "../../components/RegisterSteps/StepOne";
import StepTwo from "@/components/RegisterSteps/StepTwo";

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
      <View style={styles.content}>
        <StepTwo />
      </View>
    </View>
  );
};

export default Register;
