import {
  Image,
  ScrollView,
  Text,
  View,
  Alert,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import styles from "../../utils/styles/Payment.module.css";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import { tasaBCV } from "@/atoms/Modals";
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentCard = ({ button, text, order, handlePress }) => {
  const global = require("@/utils/styles/global.js");
  const [aproved, setAproved] = useState(false);
  const [error, setError] = useState(false);
  const [reference, setReference] = useState("");
  const tasa = useRecoilValue(tasaBCV);

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
    ToastAndroid.show(`Texto copiado: ${text}`, ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text
          style={{
            fontFamily: "medium",
            fontSize: 16,
          }}
        >
          Datos del pago movil
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: 16,
              marginTop: 15,
            }}
          >
            Banco:
          </Text>
          <Text
            style={{
              fontFamily: "regular",
              fontSize: 16,
              marginTop: 15,
            }}
          >
            Bancamiga (0172)
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: 16,
            }}
          >
            Documento:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => copyToClipboard("504932558")}>
              <Feather name="clipboard" size={18} color="black" />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 16,
                marginLeft: 5,
              }}
            >
              J-504932558
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: 16,
            }}
          >
            Telefono:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => copyToClipboard("04265523463")}>
              <Feather name="clipboard" size={18} color="black" />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 16,
                marginLeft: 5,
              }}
            >
              04265523463
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "regular",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Monto total en Bs: {(tasa * order.amount).toFixed(2)}{" "}
        </Text>
        <Text
          style={{
            flex: 1,
            fontFamily: "regular",
            fontSize: 14,
            marginTop: 5,
          }}
        >
          Tasa oficial del BCV: {tasa}
        </Text>
        <TextInput
          value={reference}
          onChangeText={(e) => setReference(e)}
          placeholder={`Numero de referencia del pago movil`}
          style={
            reference
              ? {
                  flex: 1,
                  borderColor: "#333",
                  padding: 10,
                  fontFamily: "regular",
                  borderWidth: 0.5,
                  borderRadius: 8,
                  marginVertical: 10,
                }
              : {
                  flex: 1,
                  borderColor: "#333",
                  padding: 10,
                  fontFamily: "regular",
                  borderWidth: 0.5,
                  borderRadius: 8,
                  borderWidth: 0.5,
                  marginVertical: 10,
                }
          }
        />
        {error ? (
          <Text style={{ fontFamily: "regular", color: "red", fontSize: 12 }}>
            Tienes que colocar un numero de referencia para poder darle a pagar
          </Text>
        ) : (
          ""
        )}
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
                if (reference === "") {
                  setError(true);
                  return;
                }
                Alert.alert(
                  "Orden de pago",
                  `Has pagado $${order.amount}.00 por ${order.quantity} boleto(s), para ${order.arrival}, a nombre(s) de ${reference}`,
                  [{ text: "Aceptar", onPress: () => console.log("Aceptado") }]
                );
                setError(false);
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
