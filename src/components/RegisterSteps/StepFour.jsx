import { Alert, View, ActivityIndicator, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles/StepFour.module.css";
import CustomButton from "../CustomButton";
import EnterCode from "../EnterCode";
import CustomText from "../CustomText";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const StepFour = ({ navigation, route }) => {
  const { params } = route;
  const { registerForm } = params;
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      userSub: registerForm?.userSub,
      email: registerForm?.email,
      code: ["", "", "", "", "", ""],
    },
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(navigation.getParent().getState());
  }, []);
  const omHandleConfirm = async (data) => {
    setIsLoading(true);
    setErrorMsg("");
    const { email, code } = data;
    let newCode = "";
    code.forEach((item) => {
      newCode = newCode + item;
    });
    try {
      if (!code.lenght === 6) return console.log("no tiene 6");
      await Auth.confirmSignUp(email, newCode);
      if (registerForm?.back) return navigation.goBack();
      navigation.goBack();
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
    setIsLoading(false);
  };

  const onResendCode = async () => {
    try {
      await Auth.resendSignUp(params?.registerForm?.email);
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
    <View style={styles.content}>
      <CustomText
        styled={{
          title: styles.title,
          subtitle: styles.subtitle,
          container: styles.textContainer,
        }}
        title={`Ingresar codigo`}
        subtitle={`Te enviamos un correo electronico ${registerForm.email}`}
      />
      <Text style={{ marginBottom: 8, color: "red" }}>{errorMsg}</Text>
      <EnterCode
        title={`No recibiste ningun correo?`}
        subtitle={"Enviar de nuevo"}
        styled={{
          container: styles.enterCode,
        }}
        control={control}
        onResendCode={onResendCode}
      />
      <CustomButton
        text={isLoading ? <ActivityIndicator /> : `Confirmar cuenta`}
        disabled={isLoading}
        handlePress={handleSubmit(omHandleConfirm)}
        textStyles={styles.textContinue}
        buttonStyles={styles.continue}
      />
    </View>
  );
};

export default StepFour;
