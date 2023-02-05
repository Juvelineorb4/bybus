import { Text, View } from "react-native";
import React from "react";
import styles from "./styles/StepFour.module.css";
import CustomButton from "../CustomButton";
import EnterCode from "../EnterCode";

const StepFour = () => {
  return (
    <View style={styles.content}>
      <EnterCode
        title={`Didn't you get your code?`}
        subtitle={"Send the code again"}
        styled={{
          container: styles.enterCode,
        }}
      />
    </View>
  );
};

export default StepFour;
