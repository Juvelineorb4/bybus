import { Alert, View } from "react-native";
import React, { useEffect } from "react";
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
      userSub: registerForm.userSub,
      email: registerForm.email,
      code: ["", "", "", "", "", ""],
    },
  });

  useEffect(() => {
    console.log(navigation.getParent().getState());
  }, []);

  const omHandleConfirm = async (data) => {
    const { email, code } = data;
    let newCode = "";
    code.forEach((item) => {
      newCode = newCode + item;
    });

    try {
      if (!code.lenght === 6) return console.log("no tiene 6");
      await Auth.confirmSignUp(email, newCode);
      if (registerForm?.back) return navigation.goBack();
      navigation.replace("Login");
    } catch (error) {
      console.log(error);
      if (
        error.message == "User cannot be confirmed. Current status is CONFIRMED"
      )
        Alert.alert(error.message);
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
        // subtitle={`We have sent you a confirmation code on the email ${registerForm.email}`}
        subtitle={`Te enviamos un correo electronico ${registerForm.email}`}
      />
      <EnterCode
        title={`No recibiste ningun correo?`}
        subtitle={"Enviar de nuevo"}
        styled={{
          container: styles.enterCode,
        }}
        control={control}
      />
      <CustomButton
        text={`Confirmar cuenta`}
        handlePress={handleSubmit(omHandleConfirm)}
        textStyles={styles.textContinue}
        buttonStyles={styles.continue}
      />
    </View>
  );
};

export default StepFour;
