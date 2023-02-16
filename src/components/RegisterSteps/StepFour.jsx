import { Alert, View } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles/StepFour.module.css";
import CustomButton from "../CustomButton";
import EnterCode from "../EnterCode";
import CustomText from "../CustomText";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth } from 'aws-amplify';

const StepFour = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: params.email,
      code: ["", "", "", "", "", ""]
    }
  });




  const omHandleConfirm = async (data) => {
    const { email, code } = data
    let newCode = ""
    code.forEach(item => {
      newCode = newCode + item
    });

    try {
      if (!code.lenght === 6) return console.log("no tiene 6");
      const result = await Auth.confirmSignUp(email, newCode)
      console.log(result)
    } catch (error) {
      Alert.alert("Ooops: ", error.message)
    }
  }



  return (
    <View style={styles.content}>
      <CustomText
        styled={{
          title: styles.title,
          subtitle: styles.subtitle,
          container: styles.textContainer,
        }}
        title={`Enter code`}
        subtitle={`We have sent you a confirmation code on the email ${params.email}`}
      />
      <EnterCode
        title={`Didn't you get your code?`}
        subtitle={"Send the code again"}
        styled={{
          container: styles.enterCode,
        }}
        control={control}
      />
      <CustomButton
        text={`Confirm Account`}
        handlePress={handleSubmit(omHandleConfirm)}
        textStyles={styles.textContinue}
        buttonStyles={styles.continue}
      />
    </View>
  );
};

export default StepFour;
