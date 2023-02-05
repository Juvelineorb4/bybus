import { Text, View } from "react-native";
import React from "react";
import PaymentCard from "../Payment/PaymentCard";
import styles from "./styles/StepThree.module.css";
import CustomButton from "../CustomButton";

const StepThree = () => {
  return (
    <View style={styles.content}>
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
        textStyles={styles.textContinue}
        buttonStyles={styles.continue}
      />
    </View>
  );
};

export default StepThree;
