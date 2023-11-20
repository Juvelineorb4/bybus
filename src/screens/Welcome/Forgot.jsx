import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Forgot.module.css";
import { CustomButton, CustomInput, RouteCard } from "@/components";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import CustomTimer from "@/components/CustomTimer";
import { Auth } from "aws-amplify";
const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const Forgot = () => {
  const global = require("@/utils/styles/global.js");

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      code: ["", "", "", "", "", ""],
    },
  });
  const navigation = useNavigation();
  const emailValue = watch("email");

  // funcion para solicitar un codigo para setear contraseña nueva
  const onHandleForgotPassword = async (data) => {
    const { email } = data;
    try {
      await Auth.forgotPassword(email);
      navigation.navigate("ChangePassword", { email: emailValue });
    } catch (error) {
      Alert.alert("Ooopss ", error.message);
    }
  };

  return (
    <View style={[styles.container, global.bgWhite]}>
      <View style={styles.content}>
        <ScrollView>
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
                title: [styles.title, global.black],
                subtitle: [styles.subtitle, global.topGray],
                container: styles.textContainer,
              }}
              title={`Cambiar contrasena`}
              subtitle={`Escribe el correo asosciado a tu cuenta`}
            />
          </View>
          <Text style={{ color: "red", marginBottom: 5 }}>{errorMsg}</Text>
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
          <Text style={[styles.code, global.topGray]}>
            Te enviaremos un correo con un codigo de 6 digitos para confirmar:{" "}
            <Text style={styles.emailText}>{emailValue}</Text>
          </Text>
        </ScrollView>
        <CustomButton
          text={`Confirmar`}
          handlePress={handleSubmit(onHandleForgotPassword)}
          textStyles={[styles.textContinue, global.white]}
          buttonStyles={[styles.continue, global.mainBgColor]}
        />
      </View>
    </View>
  );
};

export default Forgot;
