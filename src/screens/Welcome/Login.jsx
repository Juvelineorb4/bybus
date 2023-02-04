import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Login.module.css";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";
import CustomText from "@/components/CustomText";

const Login = ({ navigation, route }) => {
  const { control, handleSubmit } = useForm();
  return (
    <ScrollView>
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
          </View>
          <View style={styles.buttons}>
            <CustomButton
              text={`Log In`}
              handlePress={() =>
                handleSubmit(navigation.navigate(route.params.HOME))
              }
              textStyles={styles.textLogin}
              buttonStyles={styles.login}
            />
            <View style={styles.selects}>
              <View style={styles.remember}>
                <Text style={styles.rememberText}>Remember Me</Text>
              </View>
              <Text style={styles.forgot}>Forgot your password?</Text>
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
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
