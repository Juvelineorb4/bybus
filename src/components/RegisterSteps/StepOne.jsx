import { Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { CustomInput, CustomButton } from "@/components";
import { useForm } from "react-hook-form";
import styles from "./styles/StepOne.module.css";
import CustomText from "../CustomText";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
// recoil
import { useRecoilValue } from "recoil";
import { tokenNotification } from "@/atoms/Modals";
// check box
import CustomCheckBox from "@/components/CustomCheckBox";
import * as WebBrowser from "expo-web-browser";
const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const StepOne = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [msgError, setMsgError] = useState("");
  const token = useRecoilValue(tokenNotification);
  const { control, handleSubmit, watch, register } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();
  console.log("EL TOQUEN A GUARDAR", token);
  const onHandleRegister = async (data) => {
    setIsLoading(true);
    const { name, email, password } = data;
    try {
      const { userSub, user } = await Auth.signUp({
        username: email.trim(),
        password: password.trim(),
        attributes: {
          name: name.trim(),
          "custom:notificationToken": token,
        },
      });
      navigation.navigate("Register_StepFour", {
        registerForm: {
          userSub,
          email: user.username,
        },
      });
    } catch (error) {
      console.log(error.message);
      switch (error.message) {
        case "An account with the given email already exists.":
          setMsgError(
            `Ya existe un registro con el correo electronico ${email}`
          );
          break;

        default:
          setMsgError("Ocurrio un Error Intente de Nuevo");
          break;
      }
    }
    setIsLoading(false);
  };

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://www.bybusvenezuela.com/politics"
    );
  };
  return (
    <View style={styles.content}>
      <ScrollView style={styles.form}>
        <CustomText
          styled={{
            title: styles.title,
            subtitle: styles.subtitle,
            container: styles.textContainer,
          }}
          title={`Detalles de tu cuenta`}
          subtitle={`Llena la informacion para que creemos tu cuenta nueva.`}
        />
        <Text style={{ marginBottom: 5, color: "red" }}>{msgError}</Text>
        <CustomInput
          control={control}
          name={`name`}
          placeholder={"Christopher Alvarez"}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            placeholder: styles.placeholder,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          text={`Nombre completo`}
          rules={{
            required: "Requerido",
            minLength: {
              value: 3,
              message: "Minimo 3 caracteres",
            },
            maxLength: {
              value: 24,
              message: "Maximo 24 caracteres",
            },
          }}
        />
        <CustomInput
          control={control}
          name={`email`}
          placeholder={"ejemplo@email.com"}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            placeholder: styles.placeholder,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          text={`Correo electronico`}
          rules={{
            required: "Requerido",
            pattern: { value: EMAIL_REGEX, message: "Invalido" },
          }}
        />
        <CustomInput
          control={control}
          name={`password`}
          placeholder={"********"}
          styled={{
            text: styles.textInput,
            label: [styles.labelInput, global.topGray],
            error: styles.errorInput,
            placeholder: styles.placeholder,
            input: [styles.inputContainer, global.bgWhiteSoft],
            security: styles.security,
          }}
          text={`Contrasena`}
          security={true}
          rules={{
            required: "Requerido",
            minLength: {
              value: 8,
              message: "Minimo 8 caracteres",
            },
          }}
        />
        <CustomInput
          control={control}
          name={`password-repeat`}
          placeholder={"********"}
          styled={{
            text: styles.textInput,
            label: [styles.labelInput, global.topGray],
            error: styles.errorInput,
            placeholder: styles.placeholder,
            input: [styles.inputContainer, global.bgWhiteSoft],
            security: styles.security,
          }}
          text={`Repetir contrasena`}
          security={true}
          rules={{
            required: "Requerido",
            validate: (value) => value == pwd || "No coinciden",
          }}
        />
        <CustomCheckBox
          control={control}
          name={"terms"}
          text={"Acepto los Terminos y Condiciones"}
          onPressed={_handlePressButtonAsync}
          rules={{ required: "Requerido" }}
        />
      </ScrollView>
      <View style={styles.controls}>
        <CustomButton
          text={isLoading ? <ActivityIndicator /> : `Continuar`}
          disabled={isLoading}
          handlePress={handleSubmit(onHandleRegister)}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default StepOne;
