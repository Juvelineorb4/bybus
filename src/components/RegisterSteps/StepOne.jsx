import { Text, View } from "react-native";
import React from "react";
import { CustomInput, CustomButton } from "@/components";
import { useForm } from "react-hook-form";
import styles from "./styles/StepOne.module.css";
import CustomText from "../CustomText";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Auth } from 'aws-amplify';
// recoil
import { useRecoilValue } from 'recoil'
import { tokenNotification } from '@/atoms/Modals'

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

const StepOne = () => {
  const token = useRecoilValue(tokenNotification)
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password")
  const navigation = useNavigation();


  const onHandleRegister = async (data) => {
    const { name, email, password } = data
    console.log(token)
    try {
      const { userSub, user } = await Auth.signUp({
        username: email.trim(),
        password: password.trim(),
        attributes: {
          name: name.trim(),
          // 'custom:notificationToken': token,
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      })
      navigation.navigate('Register_StepTwo', {
        registerForm: {
          userSub,
          email: user.username
        }
      })
    } catch (error) {
      console.error(error.message)
    }
  }


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
            placeholder: styles.placeholder,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          text={`Nombre completo`}
          rules={{
            required: "Requerido",
            minLength: {
              value: 3,
              message: "Minimo 3 caracteres"
            },
            maxLength: {
              value: 24,
              message: "Maximo 24 caracteres"
            }
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
            pattern: { value: EMAIL_REGEX, message: "Invalido" }
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
              message: "Minimo 8 caracteres"
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
            validate: value =>
              value == pwd || 'No coinciden'
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
