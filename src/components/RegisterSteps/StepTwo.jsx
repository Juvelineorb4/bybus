import React, { useState } from "react";
import { Button, Image, ScrollView, View } from "react-native";
import CustomImageSelect from "../CustomImageSelect";
import styles from "@/utils/styles/Register.module.css";
import CustomButton from "../CustomButton";

export default function StepTwo() {
  return (
    <ScrollView>
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
      <View style={styles.buttons}>
        <CustomButton
          text={`Skip`}
          textStyles={styles.textSkip}
          buttonStyles={styles.skip}
        />
        <CustomButton
          text={`Continue`}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </ScrollView>
  );
}
