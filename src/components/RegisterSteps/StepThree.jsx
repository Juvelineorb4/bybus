import { Text, View } from "react-native";
import React, { useEffect } from "react";
import PaymentCard from "../Payment/PaymentCard";
import styles from "./styles/StepThree.module.css";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from 'aws-amplify';

const StepThree = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit } = useForm({
    defaultValues: route.params?.registerForm
  });


  // funcion para registrar el usuario 
  const onHandleRegister = async (data) => {
    const { email, name, password } = data
    try {
      const result = await Auth.signUp({
        username: email.trim(),
        password: password.trim(),
        attributes: {
          name: name.trim()
        }
      })
      console.log(result)
      navigation.navigate('Register_StepFour', {
        email: email.trim()
      })
    } catch (error) {
      console.error(error.message)
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
        title={`Add payment method`}
        subtitle={`Connect your travel card or add your 
        debate/credit card.`}
      />
      <View style={styles.methods}>
        <View style={styles.travel}>
          <View style={styles.lineTop} />

          <Text style={styles.titleTravel}>Travel card</Text>
          <CustomButton
            text={`Connect`}
            textStyles={styles.textTravelButton}
            buttonStyles={styles.travelButton}
          />
          <View style={styles.lineDown} />
        </View>
        <PaymentCard button={true} text="Add Card" />
      </View>
      <CustomButton
        text={`Continue`}
        handlePress={handleSubmit(onHandleRegister)}
        textStyles={styles.textContinue}
        buttonStyles={styles.continue}
      />
    </View>
  );
};

export default StepThree;
