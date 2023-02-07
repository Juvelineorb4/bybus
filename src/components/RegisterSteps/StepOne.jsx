import { Text, View } from "react-native";
import React from "react";
import { CustomInput, CustomButton } from "@/components";
import { useForm } from "react-hook-form";
import styles from "./styles/StepOne.module.css";
import CustomText from "../CustomText";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const StepOne = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation(); 
  return (
    <View style={styles.content}>
      <ScrollView style={styles.form}>
        <CustomText
          styled={{
            title: styles.title,
            subtitle: styles.subtitle,
            container: styles.textContainer,
          }}
          title={`Account details`}
          subtitle={`Fill in some details about you to create your new account.`}
        />
        <CustomInput
          control={control}
          name={`username`}
          placeholder={"Write your username..."}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Username`}
          icon={{
            name: "account-circle-outline",
            color: "#404040",
            size: 25,
          }}
        />
        <CustomInput
          control={control}
          name={`email`}
          placeholder={"Write your email..."}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Email`}
          icon={{
            name: "email-outline",
            color: "#404040",
            size: 25,
          }}
        />
        <CustomInput
          control={control}
          name={`password`}
          placeholder={"Write your password..."}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Password`}
          icon={{
            name: "lock-outline",
            color: "#404040",
            size: 25,
          }}
          security={true}
        />
        <CustomInput
          control={control}
          name={`password-again`}
          placeholder={"Write your password again..."}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Repeat Password`}
          icon={{
            name: "lock-outline",
            color: "#404040",
            size: 25,
          }}
        />
        <Text style={styles.terms}>I accept the Terms and Privacy Policy</Text>
      </ScrollView>
      <View style={styles.controls}>
        <CustomButton
          text={`Continue`}
          handlePress={handleSubmit(() => navigation.navigate('Register_StepTwo'))}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default StepOne;
