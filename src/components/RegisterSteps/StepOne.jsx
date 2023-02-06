import { ScrollView, Text, View } from "react-native";
import React from "react";
import { CustomInput, CustomButton } from "@/components";
import { useForm } from "react-hook-form";
import styles from "@/utils/styles/Register.module.css";

const StepOne = (data) => {
  const { control, handleSubmit } = useForm();

  return (
    <ScrollView>
      <View>
        <View>
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
        </View>
        <Text style={styles.terms}>I accept the Terms and Privacy Policy</Text>
        <CustomButton
          text={`Continue`}
          handlePress={() =>
            handleSubmit(navigation.navigate(route.params.HOME))
          }
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </ScrollView>
  );
};

export default StepOne;
