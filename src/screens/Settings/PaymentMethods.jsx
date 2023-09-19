import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/PaymentScreen.module.css";
import CustomText from "@/components/CustomText";
import { CustomButton, Icon } from "@/components";
import { predeterminedPayment } from "@/atoms/Modals";
import { useRecoilState } from "recoil";
import CustomCardTitle from "@/components/CustomCardTitle";
import PaymentCard from "@/components/Payment/PaymentCard";
import { ScrollView } from "react-native-gesture-handler";

const PaymentMethods = () => {
  const global = require('@/utils/styles/global.js');
  // const [predetermined, setPredetermined] = useState('')
  const [paymentValue, setPaymentValue] = useRecoilState(predeterminedPayment);

  const checkPaymentValue = async () => {
    try {
      setPaymentValue("");
    } catch (error) {
      setPaymentValue(null);
    }
  };
  // const paymentPredetermined = (value) => {
  //   setPredetermined(value);
  //   setPaymentValue(value);
  // };
  useEffect(() => {
    checkPaymentValue();
  }, []);
  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <CustomText
        title={`Metodos de pago`}
        subtitle={`Agrega un metodo de pago y cambia tu metodo preferencial.`}
        styled={{
          title: [styles.title, global.black],
          subtitle: [styles.subtitle, global.topGray],
          container: styles.textContainer,
        }}
      />
      <View style={[styles.methods, global.bgWhiteSoft]}>
        <View style={[styles.travelCard, global.bgWhite]}>
          <View style={styles.positionCard}>
            <CustomCardTitle
              title={`Tarjeta de viaje`}
              icon={{
                name: "dots-grid",
                size: 20,
                color: "#1F1F1F",
              }}
              styled={{
                topText: styles.cardTopText,
                title: [styles.cardTitle, global.black],
              }}
            />
            {paymentValue === "Travel_Card" ? (
              <CustomButton
                text={`Predeterminado`}
                textStyles={[styles.textPredeterminedOff, global.black]}
                buttonStyles={[styles.predeterminedOff, global.bgWhite]}
              />
            ) : (
              <CustomButton
                text={`Predeterminado`}
                handlePress={() => setPaymentValue("Travel_Card")}
                textStyles={[styles.textPredetermined, global.white]}
                buttonStyles={[styles.predetermined, global.bgBlack]}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <CustomText
              title={`Balance`}
              subtitle={`00.00 $`}
              styled={{
                title: [styles.titleBalance, global.midGray],
                subtitle: [styles.subtitleBalance, global.black],
                container: styles.balanceTextContainer,
              }}
            />
          </View>
          {paymentValue === "Travel_Card" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon name={`check-decagram`} size={16} color={`#317f43`} />
              <Text style={[styles.activePredetermined, global.black]}>Predeterminado</Text>
            </View>
          )}
        </View>
        <View style={[styles.mobile, global.bgWhite]}>
          <View style={styles.positionCard}>
            <CustomCardTitle
              title={`Mobile Pay`}
              icon={{
                name: "dots-grid",
                size: 20,
                color: "#1F1F1F",
              }}
              styled={{
                topText: styles.cardTopText,
                title: styles.cardTitle,
              }}
            />
            {paymentValue === "Mobile_Pay" ? (
              <CustomButton
                text={`Predeterminado`}
                textStyles={styles.textPredeterminedOff}
                buttonStyles={styles.predeterminedOff}
              />
            ) : (
              <CustomButton
                text={`Predeterminado`}
                handlePress={() => setPaymentValue("Mobile_Pay")}
                textStyles={styles.textPredetermined}
                buttonStyles={styles.predetermined}
              />
            )}
          </View>
          {paymentValue === "Mobile_Pay" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Icon name={`check-decagram`} size={16} color={`#317f43`} />
              <Text style={styles.activePredetermined}>Predeterminado</Text>
            </View>
          )}
        </View>
        <View style={[styles.creditDebitCard, global.bgWhite]}>
          <View style={styles.positionCard}>
            <CustomCardTitle
              title={`Card Bank`}
              icon={{
                name: "dots-grid",
                size: 20,
                color: "#1F1F1F",
              }}
              styled={{
                topText: styles.cardTopText,
                title: styles.cardTitle,
              }}
            />
            {paymentValue === "CreditDebit_Card" ? (
              <CustomButton
                text={`Predeterminado`}
                textStyles={styles.textPredeterminedOff}
                buttonStyles={styles.predeterminedOff}
              />
            ) : (
              <CustomButton
                text={`Predeterminado`}
                handlePress={() => setPaymentValue("CreditDebit_Card")}
                textStyles={styles.textPredetermined}
                buttonStyles={styles.predetermined}
              />
            )}
          </View>
          <View style={{marginVertical: 15}}>
            <PaymentCard button={true} text={`Agregar tarjeta`} />
          </View>
          {paymentValue === "CreditDebit_Card" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon name={`check-decagram`} size={16} color={`#317f43`} />
              <Text style={styles.activePredetermined}>Predeterminado</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentMethods;
