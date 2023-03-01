import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import CustomInput from "../CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import styles from "../../utils/styles/Payment.module.css";

const PaymentCard = ({ button, text }) => {
  const global = require('@/utils/styles/global.js');
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image
          style={{
            width: 50,
            height: 20,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/mastercard.png")}
        />
        <Image
          style={{
            width: 50,
            height: 20,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/visa.png")}
        />
      </View>
      <View style={styles.layout}>
        <CustomInput
          control={control}
          name={`cardNumber`}
          placeholder={"0000 0000 0000 0000"}
          styled={{
            text: styles.textCardNumber,
            error: styles.errorCardNumber,
            input: [styles.inputCardNumber, global.bgWhiteSoft],
          }}
          iconRight={{
            name: "credit-card-scan-outline",
            color: "#404040",
            size: 25,
          }}
        />
        <View style={styles.inputs}>
          <CustomInput
            control={control}
            name={`cardExpiration`}
            placeholder={"MM/YY"}
            styled={{
              text: [styles.textCardDate, global.black],
              error: styles.errorCardDate,
              input: [styles.inputCardDate, global.bgWhiteSoft],
            }}
          />
          <CustomInput
            control={control}
            name={`cardSecuredCode`}
            placeholder={"XXXX"}
            styled={{
              text: [styles.textCardCode, global.black],
              error: styles.errorCardCode,
              input: [styles.inputCardCode, global.bgWhiteSoft],
            }}
          />
        </View>
        {button && (
          <View style={styles.button}>
            <CustomButton
              text={text}
              textStyles={[styles.btnText, global.white]}
              buttonStyles={[styles.btnBg, global.bgBlack]}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default PaymentCard;
