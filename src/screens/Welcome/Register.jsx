import { Image, View, Text } from "react-native";
import React from "react";
import styles from "@/utils/styles/Register.module.css";
import { StepOne } from "@/components/RegisterSteps";
const steps = [
  {
    id: "step-1",
    component: <StepOne />,
  },
  {
    id: "step-2",
    component: <StepOne />,
  },
  {
    id: "step-3",
    component: <StepOne />,
  },
  {
    id: "step-4",
    component: <StepOne />,
  },
];

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
      <StepOne />
    </View>
  );
};

export default Register;
