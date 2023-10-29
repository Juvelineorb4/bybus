import { Text, View } from "react-native";
import React from "react";
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

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const StepOne = () => {
  const token = useRecoilValue(tokenNotification);
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();
  console.log("EL TOQUEN A GUARDAR", token);
  const onHandleRegister = async (data) => {
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
      console.error(error.message);
    }
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
        <CustomInput
          control={control}
          name={`name`}
          placeholder={"Christopher Alvarez"}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Nombre completo`}
          icon={require("@/utils/images/profile_default.png")}
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
            input: styles.inputContainer,
          }}
          text={`Correo electronico`}
          icon={require("@/utils/images/email.png")}
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
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Contrasena`}
          icon={require("@/utils/images/password.png")}
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
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Repetir contrasena`}
          icon={require("@/utils/images/password.png")}
          security={true}
          rules={{
            required: "Requerido",
            validate: (value) => value == pwd || "No coinciden",
          }}
        />
        <Text style={styles.terms}>Acepto los Terminos y Condiciones</Text>
      </ScrollView>
      <View style={styles.controls}>
        <CustomButton
          text={`Continuar`}
          handlePress={handleSubmit(onHandleRegister)}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default StepOne;
