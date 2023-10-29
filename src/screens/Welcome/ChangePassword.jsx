import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "@/utils/styles/Forgot.module.css";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import CustomTimer from "@/components/CustomTimer";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ChangePassword = ({ navigation, route }) => {
  const { params } = route;
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: params?.email,
      code: ["", "", "", "", "", ""],
    },
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [resendMsg, setResendMsg] = useState("");
  const pwd = watch("password");

  // por si alguna razon el email no viene
  useLayoutEffect(() => {
    if (!route.params?.email) return navigation.goBack();
  }, []);

  const onHandleNewPassword = async (data) => {
    const { email, password, code } = data;
    let newCode = "";
    code.forEach((item) => {
      newCode = newCode + item;
    });
    try {
      if (!newCode.length === 6) return console.log("invalid code");
      const result = await Auth.forgotPasswordSubmit(email, newCode, password);
      navigation.navigate("Login");
    } catch (error) {
      console.log(error.message);
      switch (error.message) {
        case "Invalid verification code provided, please try again.":
          setErrorMsg(
            "Codigo de Verificacion ingresado no es valido, Intente de nuevo."
          );
          break;
        case "Attempt limit exceeded, please try after some time.":
          setErrorMsg("Limite de intentos excedido intenta mas tarde.");
          break;
        default:
          setErrorMsg("Ocurrio un error, Verique datos y codigo ingresado");
          break;
      }
    }
  };

  const onResendCode = async () => {
    try {
      const result = await Auth.forgotPassword(route.params?.email);
      console.log(result);
    } catch (error) {
      switch (error.message) {
        case "Attempt limit exceeded, please try after some time.":
          Alert.alert("Ooopss ", "Limite excedido intente mas tarde.");
          break;

        default:
          Alert.alert("Ooopss ", "Ocurrio un error intente mas tarde.");
          break;
      }
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <View style={styles.textContainer}>
            <Image
              style={{
                width: 200,
                height: 40,
                resizeMode: "cover",
                alignSelf: "center",
                marginVertical: 15,
              }}
              source={require("@/utils/images/icon.png")}
            />
            <CustomText
              styled={{
                title: styles.title,
                subtitle: styles.subtitle,
                container: styles.textContainer,
              }}
              title={`Crear contraseña`}
              subtitle={`Crear una nueva contraseña para tu cuenta`}
            />
          </View>
          <Text style={{ color: "red", marginBottom: 5 }}>{errorMsg}</Text>
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
              text={`Nueva contraseña`}
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
                  message: "Minimo 8 caracteres",
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
              text={`Confirmar contraseña`}
              icon={{
                name: "lock-outline",
                color: "#404040",
                size: 25,
              }}
              security={true}
              rules={{
                required: "Requerido",
                validate: (value) =>
                  value == pwd || "No coinciden las contrasenas",
              }}
            />
          </View>
          <Text style={styles.code}>
            Te enviamos un correo con un codigo de 6 digitos para confirmar:{" "}
            <Text style={styles.emailText}>{route.params?.email}</Text> .El
            codigo expirara en:{" "}
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
