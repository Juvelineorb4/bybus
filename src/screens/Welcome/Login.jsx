import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Login.module.css";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";
import CustomText from "@/components/CustomText";
import { Auth } from 'aws-amplify';


const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const Login = ({ navigation, route }) => {
  const { control, handleSubmit } = useForm();

  const onHandleLogin = async (data) => {
    try {
      const result = await Auth.signIn(data.email, data.password)
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
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <View styles={styles.textContent}>
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
                styled={{ title: styles.title, subtitle: styles.subtitle }}
                title="Welcome back"
                subtitle="Access your account"
              />
            </View>
            <View style={styles.signin}>
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
                  name: "account-circle-outline",
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
            </View>

          </View>
          <View style={styles.buttons}>
            <CustomButton
              text={`Log In`}
              handlePress={handleSubmit(onHandleLogin)}
              textStyles={styles.textLogin}
              buttonStyles={styles.login}
            />
            <View style={styles.selects}>
              <CustomButton
                text={`Remember Me`}
                textStyles={styles.rememberText}
              />
              <CustomButton
                text={`Forgot your password?`}
                handlePress={() => navigation.navigate("Forgot_App")}
                textStyles={styles.forgot}
              />
            </View>
            <View style={styles.hairline}>
              <View style={styles.line} />
              <Text style={styles.textLine}>Or log in with</Text>
            </View>

            <View style={styles.extras}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 20,
                  resizeMode: "contain",
                }}
                source={require("@/utils/images/google.png")}
              />
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                }}
                source={require("@/utils/images/facebook.png")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
