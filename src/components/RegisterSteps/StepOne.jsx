import { Text, View } from "react-native";
import React from "react";
import { CustomInput, CustomButton } from "@/components";
import { useForm } from "react-hook-form";
import styles from "./styles/StepOne.module.css";
import CustomText from "../CustomText";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Auth } from 'aws-amplify';
// recoil
import { useRecoilValue } from 'recoil'
import { tokenNotification } from '@/atoms/Modals'

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

const StepOne = () => {
  const token = useRecoilValue(tokenNotification)
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password")
  const navigation = useNavigation();


  const onHandleRegister = async (data) => {
    const { name, email, password } = data
    console.log(token)
    try {
      const { userSub, user } = await Auth.signUp({
        username: email.trim(),
        password: password.trim(),
        attributes: {
          name: name.trim(),
          'custom:notificationToken': token,
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      })
      navigation.navigate('Register_StepTwo', {
        registerForm: {
          userSub,
          email: user.username
        }
      })
    } catch (error) {
      console.error(error.message)
    }
  }


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
          name={`name`}
          placeholder={"Write your username..."}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Full Name`}
          icon={{
            name: "account-circle-outline",
            color: "#404040",
            size: 25,
          }}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Min 3 characters"
            },
            maxLength: {
              value: 24,
              message: "Max 24 characters"
            }
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
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Invalid Email" }
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
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Min 8 characters"
            },
          }}

        />
        <CustomInput
          control={control}
          name={`password-repeat`}
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
          security={true}
          rules={{
            required: "Password Repeat is required",
            validate: value =>
              value == pwd || 'Password do not match'
          }}
        />
        <Text style={styles.terms}>I accept the Terms and Privacy Policy</Text>
      </ScrollView>
      <View style={styles.controls}>
        <CustomButton
          text={`Continue`}
          handlePress={handleSubmit(onHandleRegister)}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default StepOne;
