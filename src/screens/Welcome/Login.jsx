import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Login.module.css";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";
import CustomText from "@/components/CustomText";
import { Auth } from 'aws-amplify';


const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const Login = ({ navigation, route }) => {

  const global = require('@/utils/styles/global.js');

  const { control, handleSubmit } = useForm();

  const onHandleLogin = async (data) => {
    try {
      const result = await Auth.signIn(data.email, data.password)
    } catch (error) {
      Alert.alert("Ooopss ", error.message)
    }
  }

  return (
    <View style={[styles.container, global.bgWhite]}>
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
                styled={{ title: [styles.title, global.black], subtitle: [styles.subtitle, global.topGray] }}
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
                  label: [styles.labelInput, global.topGray],
                  error: styles.errorInput,
                  input: [styles.inputContainer, global.bgWhiteSoft],
                }}
                text={`Email`}
                icon={require('@/utils/images/email.png')}
                rules={{
                  required: "Email is required",
                  pattern: { value: EMAIL_REGEX, message: "Invalid Email" }
                }}
              />
              <CustomInput
                control={control}
                name={`password`}
                placeholder={"**********"}
                styled={{
                  text: styles.textInputP,
                  label: [styles.labelInputP, global.topGray],
                  error: styles.errorInputP,
                  input: [styles.inputContainerP, global.bgWhiteSoft],
                }}
                text={`Password`}
                icon={require('@/utils/images/password.png')}
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
              textStyles={[styles.textLogin, global.white]}
              buttonStyles={[styles.login, global.bgBlack]}
            />
            <View style={styles.selects}>
              <CustomButton
                text={`Forgot your password?`}
                handlePress={() => navigation.navigate("Forgot_App")}
                textStyles={[styles.forgot, global.topGray]}
              />
            </View>
            <View style={styles.hairline}>
              <View style={[styles.line, global.bgWhiteSmoke]} />
              <Text style={[styles.textLine, global.bgWhite, global.midGray]}>Or log in with</Text>
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
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
