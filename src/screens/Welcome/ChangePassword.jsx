import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "@/utils/styles/Forgot.module.css";
import CustomText from "@/components/CustomText";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";

const ChangePassword = ({ navigation, route }) => {
  const { control, handleSubmit } = useForm();
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
            />
            <Text style={styles.textRules}>
              Minimum 8 characters, with a combination of upper and lower case
              letters, characters and numbers.
            </Text>
            <CustomInput
              control={control}
              name={`passwordConfirm`}
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
            />
          </View>
        </ScrollView>
        <Text>{route.name}</Text>
        <CustomButton
          text={`Confirm New Password`}
          handlePress={handleSubmit(() => navigation.navigate("Home"))}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
