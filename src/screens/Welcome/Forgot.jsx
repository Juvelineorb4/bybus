import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useEffect } from "react";
import styles from "@/utils/styles/Forgot.module.css";
import { CustomButton, CustomInput, RouteCard } from "@/components";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import CustomTimer from "@/components/CustomTimer";
import { Auth } from "aws-amplify";
const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const Forgot = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      code: ["", "", "", "", "", ""]
    }
  });
  const navigation = useNavigation();
  const emailValue = watch("email");




  // funcion para solicitar un codigo para setear contraseña nueva
  const onHandleForgotPassword = async (data) => {
    const { email } = data
    try {
      await Auth.forgotPassword(email)
      navigation.navigate("ChangePassword", { email: emailValue })
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
        <ScrollView>
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
              title={`Reset password`}
              subtitle={`Type the email associated with your account`}
            />
          </View>

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
          <Text style={styles.code}>
            We send you a 6-digit security code to your email:{" "}
            <Text style={styles.emailText}>{emailValue}</Text>
          </Text>
        </ScrollView>
        <CustomButton
          text={`Confirm Code`}
          handlePress={handleSubmit(onHandleForgotPassword)}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default Forgot;
