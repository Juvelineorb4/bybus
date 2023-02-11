import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "@/utils/styles/Forgot.module.css";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import CustomTimer from "@/components/CustomTimer";

const Forgot = () => {
  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();
  const emailValue = watch("email");
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
              subtitle={`Type the phone number associated with your account`}
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
          />
          <Text style={styles.code}>
            We send you a 5-digit security code to your email:{" "}
            <Text style={styles.emailText}>{emailValue}</Text> .The code will
            expire in:{" "}
            {emailValue && (
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
          />
        </ScrollView>
        <CustomButton
          text={`Confirm Code`}
          handlePress={handleSubmit(() =>
            navigation.navigate("ChangePassword")
          )}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default Forgot;
