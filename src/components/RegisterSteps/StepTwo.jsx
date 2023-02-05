import React, { useState } from "react";
import { Button, Image, ScrollView, View } from "react-native";
import CustomImageSelect from "../CustomImageSelect";
import styles from "./styles/StepTwo.module.css";
import CustomButton from "../CustomButton";

export default function StepTwo() {
  return (
      <View style={styles.content}>
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
            textStyles={styles.textSkip}
            buttonStyles={styles.skip}
          />
          <CustomButton
            text={`Continue`}
            textStyles={styles.textContinueTwo}
            buttonStyles={styles.continueTwo}
          />
        </View>
      </View>
  );
}
