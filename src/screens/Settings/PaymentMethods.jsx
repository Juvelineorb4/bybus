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
    <ScrollView style={styles.container}>
      <CustomText
        title={`Payment methods`}
        subtitle={`Add a payment method and change its sequence when paying for your ticket.`}
        styled={{
          title: styles.title,
          subtitle: styles.subtitle,
          container: styles.textContainer,
        }}
      />
      <View style={styles.methods}>
        <View style={styles.travelCard}>
          <View style={styles.positionCard}>
            <CustomCardTitle
              title={`Travel Card`}
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
            {paymentValue === "Travel_Card" ? (
              <CustomButton
                text={`Predetermined`}
                textStyles={styles.textPredeterminedOff}
                buttonStyles={styles.predeterminedOff}
              />
            ) : (
              <CustomButton
                text={`Predetermined`}
                handlePress={() => setPaymentValue("Travel_Card")}
                textStyles={styles.textPredetermined}
                buttonStyles={styles.predetermined}
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
                title: styles.titleBalance,
                subtitle: styles.subtitleBalance,
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
              <Text style={styles.activePredetermined}>Predetermined</Text>
            </View>
          )}
        </View>
        <View style={styles.mobile}>
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
                text={`Predetermined`}
                textStyles={styles.textPredeterminedOff}
                buttonStyles={styles.predeterminedOff}
              />
            ) : (
              <CustomButton
                text={`Predetermined`}
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
              <Text style={styles.activePredetermined}>Predetermined</Text>
            </View>
          )}
        </View>
        <View style={styles.creditDebitCard}>
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
                text={`Predetermined`}
                textStyles={styles.textPredeterminedOff}
                buttonStyles={styles.predeterminedOff}
              />
            ) : (
              <CustomButton
                text={`Predetermined`}
                handlePress={() => setPaymentValue("CreditDebit_Card")}
                textStyles={styles.textPredetermined}
                buttonStyles={styles.predetermined}
              />
            )}
          </View>
          <View style={{marginVertical: 15}}>
            <PaymentCard button={true} text={`Add Card`} />
          </View>
          {paymentValue === "CreditDebit_Card" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon name={`check-decagram`} size={16} color={`#317f43`} />
              <Text style={styles.activePredetermined}>Predetermined</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentMethods;
