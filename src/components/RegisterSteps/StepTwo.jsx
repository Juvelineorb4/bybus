import React, { useEffect } from "react";
import { View } from "react-native";
import CustomImageSelect from "../CustomImageSelect";
import styles from "./styles/StepTwo.module.css";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function StepTwo() {
  const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit } = useForm();

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
            navigation.navigate("Register_StepFour", route.params)
          )}
          textStyles={styles.textSkip}
          buttonStyles={styles.skip}
        />
        <CustomButton
          text={`Continue`}
          handlePress={handleSubmit(() =>
            navigation.navigate("Register_StepFour", route.params)
          )}
          textStyles={styles.textContinueTwo}
          buttonStyles={styles.continueTwo}
        />
      </View>
    </View>
  );
}
