import { Text, View } from "react-native";
import React from "react";
import PaymentCard from "../Payment/PaymentCard";
import styles from "./styles/StepThree.module.css";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const StepThree = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
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
        handlePress={handleSubmit(() =>
          navigation.navigate("Register_StepFour")
        )}
        textStyles={styles.textContinue}
        buttonStyles={styles.continue}
      />
    </View>
  );
};

export default StepThree;
