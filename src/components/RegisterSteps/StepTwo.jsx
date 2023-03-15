import React, { useEffect, useState } from "react";
import { View } from "react-native";
import CustomImageSelect from "../CustomImageSelect";
import styles from "./styles/StepTwo.module.css";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function StepTwo() {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(undefined)
  const route = useRoute();
  const [disabledBtn, setDisabledBtn] = useState(true)

  useEffect(() => {
    console.log(route.params)
    if (imageUri) setDisabledBtn(false)
  }, [imageUri])


  
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
        uriSelect={setImageUri}
      />
      <View style={styles.controls}>
        <CustomButton
          text={`Skip`}
          handlePress={() => navigation.navigate("Register_StepFour", route.params)}
          textStyles={styles.textSkip}
          buttonStyles={styles.skip}
        />
        <CustomButton
          text={`Continue`}
          handlePress={() => navigation.navigate("Register_StepFour", { ...route.params, image: imageUri })}
          textStyles={styles.textContinueTwo}
          buttonStyles={styles.continueTwo}
          disabled={disabledBtn}
        />
      </View>
    </View>
  );
}
