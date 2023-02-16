import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import styles from "@/utils/styles/Forgot.module.css";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import CustomTimer from "@/components/CustomTimer";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";
import { Auth } from 'aws-amplify';

const ChangePassword = ({ navigation, route }) => {
  const { params } = route
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: params?.email,
      code: ["", "", "", "", "", ""]
    }
  });
  const pwd = watch("password")


  // por si alguna razon el email no viene
  useLayoutEffect(() => {
    if (!route.params?.email) return navigation.goBack()
  }, [])




  const onHandleNewPassword = async (data) => {
    const { email, password, code } = data
    let newCode = ""
    code.forEach(item => {
      newCode = newCode + item
    });
    try {
      if (!newCode.length === 6) return console.log("invalid code")
      const result = await Auth.forgotPasswordSubmit(email, newCode, password);
      console.log(result)
    } catch (error) {
      Alert.alert("Ooopss ", error.message)
    }
  }

  const onResendCode = async () => {
    try {
      const result = await Auth.forgotPassword(route.params?.email)
      console.log(result)
    } catch (error) {
      Alert.alert("Ooopss ", error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "-35%",
          resizeMode: "contain",
        }}
        source={require("@/utils/images/texture.png")}
      />
      <View style={styles.content}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.textContainer}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/icon.png")}
            />
            <CustomText
              styled={{
                title: styles.title,
                subtitle: styles.subtitle,
                container: styles.textContainer,
              }}
              title={`Create password`}
              subtitle={`Create a new password for your account`}
            />
          </View>
          <View>
            <CustomInput
              control={control}
              name={`password`}
              placeholder={"Write your new password..."}
              styled={{
                text: styles.textInput,
                label: styles.labelInput,
                error: styles.errorInput,
                input: styles.inputContainer,
              }}
              text={`New Password`}
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
            {/* <Text style={styles.textRules}>
              Minimum 8 characters, with a combination of upper and lower case
              letters, characters and numbers.
            </Text> */}
            <CustomInput
              control={control}
              name={`password-confirm`}
              placeholder={"Please confirm your password..."}
              styled={{
                text: styles.textInput,
                label: styles.labelInput,
                error: styles.errorInput,
                input: styles.inputContainer,
              }}
              text={`Confirm Password`}
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
          </View>
          <Text style={styles.code}>
            We send you a 6-digit security code to your email:{" "}
            <Text style={styles.emailText}>{route.params?.email}</Text> .The code will
            expire in:{" "}
            {route.params?.email && (
              <CustomTimer
                styled={{
                  timer: styles.timer,
                }}
                time={{
                  string: "10:00",
                  seconds: 600,
                }}
              />
            )}
          </Text>
          <EnterCode
            title={`Didn't you get your code?`}
            subtitle={"Send the code again"}
            styled={{
              container: styles.enterCode,
            }}
            control={control}
            onResendCode={onResendCode}
          />
        </ScrollView>
        <CustomButton
          text={`Confirm New Password`}
          handlePress={handleSubmit(onHandleNewPassword)}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
