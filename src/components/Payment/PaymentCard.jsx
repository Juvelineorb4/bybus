import { Image, ScrollView, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import styles from "../../utils/styles/Payment.module.css";
import { AntDesign } from '@expo/vector-icons';

const PaymentCard = ({ button, text, order, handlePress }) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit } = useForm();
  const [aproved, setAproved] = useState(false)
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
            {aproved && <View style={{marginRight: 10, flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="checkcircleo" size={16} color="green" />
            <Text style={{fontSize: 14, fontFamily: 'thin', marginLeft: 4}}>Pago aprobado</Text>
            </View>}
            <CustomButton
              text={text}
              handlePress={() => {
                if (aproved) return;
                Alert.alert(
                  "Orden de pago",
                  `Has pagado $${order.mount}.00 por ${order.quantity} boleto(s), para ${order.arrival}, a nombre(s) de ${order.id}`,
                  [{ text: "Aceptar", onPress: () => console.log("Aceptado") }]
                );
                setAproved(true)
                handlePress()
              }}
              textStyles={[styles.btnText, global.white]}
              buttonStyles={[styles.btnBg, global.mainBgColor]}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default PaymentCard;
