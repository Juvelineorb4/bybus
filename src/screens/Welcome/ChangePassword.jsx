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
              title={`Crear contrasena`}
              subtitle={`Crear una nueva contrasena para tu cuenta`}
            />
          </View>
          <View>
            <CustomInput
              control={control}
              name={`password`}
              placeholder={"*********"}
              styled={{
                text: styles.textInput,
                label: styles.labelInput,
                error: styles.errorInput,
                input: styles.inputContainer,
              }}
              text={`Nueva contrasena`}
              icon={{
                name: "lock-outline",
                color: "#404040",
                size: 25,
              }}
              security={true}
              rules={{
                required: "Requerido",
                minLength: {
                  value: 8,
                  message: "Minimo 8 caracteres"
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
              placeholder={"********"}
              styled={{
                text: styles.textInput,
                label: styles.labelInput,
                error: styles.errorInput,
                input: styles.inputContainer,
              }}
              text={`Confirmar contrasena`}
              icon={{
                name: "lock-outline",
                color: "#404040",
                size: 25,
              }}
              security={true}
              rules={{
                required: "Requerido",
                validate: value =>
                  value == pwd || 'No coinciden las contrasenas'
              }}
            />
          </View>
          <Text style={styles.code}>
          Te enviamos un correo con un codigo de 6 digitos para confirmar:{" "}
            <Text style={styles.emailText}>{route.params?.email}</Text> .El codigo expirara en:{" "}
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
            title={`No te llego ningun codigo?`}
            subtitle={"Enviar de nuevo"}
            styled={{
              container: styles.enterCode,
            }}
            control={control}
            onResendCode={onResendCode}
          />
        </ScrollView>
        <CustomButton
          text={`Confirmar nueva contrasena`}
          handlePress={handleSubmit(onHandleNewPassword)}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
