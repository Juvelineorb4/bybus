import React from "react";
import { View } from "react-native";
import CustomImageSelect from "../CustomImageSelect";
import styles from "./styles/StepTwo.module.css";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

export default function StepTwo() {
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
        title={`Profile picture`}
        subtitle={`Fill in some details about you to create your new account.`}
      />
      <CustomImageSelect
        styled={{
          container: styles.imageContent,
          image: styles.image,
          buttons: styles.buttons,
          text: styles.textCamera,
          camera: styles.camera,
          btnText: styles.btnText,
          btnBg: styles.btnBg,
        }}
        button={true}
      />
      <View style={styles.controls}>
        <CustomButton
          text={`Skip`}
          handlePress={handleSubmit(() =>
            navigation.navigate("Register_StepThree")
          )}
          textStyles={styles.textSkip}
          buttonStyles={styles.skip}
        />
        <CustomButton
          text={`Continue`}
          handlePress={handleSubmit(() =>
            navigation.navigate("Register_StepThree")
          )}
          textStyles={styles.textContinueTwo}
          buttonStyles={styles.continueTwo}
        />
      </View>
    </View>
  );
}
