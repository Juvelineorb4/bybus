import { View } from "react-native";
import React from "react";
import styles from "./styles/StepFour.module.css";
import CustomButton from "../CustomButton";
import EnterCode from "../EnterCode";
import CustomText from "../CustomText";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const StepFour = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <CustomText
        styled={{
          title: styles.title,
          subtitle: styles.subtitle,
          container: styles.textContainer,
        }}
        title={`Enter code`}
        subtitle={`We have sent you a confirmation code on the phone number +58 99999990`}
      />
      <EnterCode
        title={`Didn't you get your code?`}
        subtitle={"Send the code again"}
        styled={{
          container: styles.enterCode,
        }}
      />
      <CustomButton
        text={`Confirm Account`}
        handlePress={handleSubmit(() =>
          navigation.navigate("Welcome_Start")
        )}
        textStyles={styles.textContinue}
        buttonStyles={styles.continue}
      />
    </View>
  );
};

export default StepFour;
