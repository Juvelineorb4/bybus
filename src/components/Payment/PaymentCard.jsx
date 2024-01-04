import { Image, ScrollView, Text, View, Alert, TextInput } from "react-native";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import styles from "../../utils/styles/Payment.module.css";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import { tasaBCV } from "@/atoms/Modals";

const PaymentCard = ({ button, text, order, handlePress }) => {
  const global = require("@/utils/styles/global.js");
  const [aproved, setAproved] = useState(false);
  const [error, setError] = useState(false);
  const [reference, setReference] = useState('');
  const tasa = useRecoilValue(tasaBCV)
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={{
          fontFamily: 'medium',
          fontSize: 16
        }}>Monto total en Bs: {(tasa * order.amount).toFixed(2)} </Text>
        <Text style={{
          flex: 1,
          fontFamily: 'regular',
          fontSize: 14,
          marginTop: 5,
        }}>Tasa oficial del BCV: {tasa}</Text>
        <TextInput
          value={reference}
          onChangeText={(e) => setReference(e)}
          placeholder={`Numero de referencia del pago movil`}
          style={reference ? {
            flex: 1,
            borderColor: '#333',
            padding: 10,
            fontFamily: 'regular',
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 10

          } : {
            flex: 1,
            borderColor: '#333',
            padding: 10,
            fontFamily: 'regular',
            borderWidth: 0.5,
            borderRadius: 8,
            borderWidth: 0.5,
            marginVertical: 10
          }}
        />
        {error ? <Text style={{fontFamily: 'regular', color: 'red', fontSize: 12}}>Tienes que colocar un numero de referencia para poder darle a pagar</Text> : ''}
        {button && (
          <View style={styles.button}>
            {aproved && (
              <View
                style={{
                  marginRight: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="checkcircleo" size={16} color="green" />
                <Text
                  style={{ fontSize: 14, fontFamily: "thin", marginLeft: 4 }}
                >
                  Pago por confirmar
                </Text>
              </View>
            )}
            <CustomButton
              text={text}
              handlePress={() => {
                if (aproved) return;
                if (reference === '') {
                  setError(true)
                  return
                }
                Alert.alert(
                  "Orden de pago",
                  `Has pagado $${order.amount}.00 por ${order.quantity} boleto(s), para ${order.arrival}, a nombre(s) de ${reference}`,
                  [{ text: "Aceptar", onPress: () => console.log("Aceptado") }]
                );
                setError(false)
                setAproved(true);
                handlePress(reference);
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
