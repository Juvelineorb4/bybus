import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/PaymentTicket.module.css";
import { CustomButton } from "@/components";
import PaymentCard from "@/components/Payment/PaymentCard";
// amplify
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutation from "@/graphql/customMutations";
import { useRecoilState, useRecoilValue } from "recoil";
import LeftHeader from "@/routes/Header/LeftHeader";
import { CommonActions } from "@react-navigation/native";
import * as subscriptions from "@/graphql/customSubscriptions";

const PaymentTicket = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { booking, tickets, customer, customerTicket } = route.params;
  const [paymentOrder, setPaymentOrder] = useState("");
  const [stockVerify, setStockVerify] = useState(booking?.stock);
  const [refresh, setRefresh] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const total = (tickets * (booking.price + (booking.price * booking.percentage/100))).toFixed(2);

  console.log(total);
  console.log(booking);
  const onHandlePayment = async (reference) => {
    // Crear OrderDetail
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      const payment = await API.graphql({
        query: mutation.createPayment,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: {
            reference: reference,
            amount: total,
            userID: attributes["custom:userTableID"],
          },
        },
      });
      setPaymentOrder(payment.data.createPayment.id);
      setIsPaid(true);
      console.log('referencia', reference);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleOrder = async (data) => {
    setRefresh(true);
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();

      /* Creamos el orderDetail */
      const orderDetail = await API.graphql({
        query: mutation.createOrderDetail,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: {
            amount: tickets,
            paymentMethod: "Pago Movil",
            customerName: attributes.name,
            paymentID: paymentOrder,
            customerDocument: customer.email,
            isGuest: false,
            total: total,
            customerEmail: attributes.email,
            userID: attributes["custom:userTableID"],
            bookingID: booking.id,
            status: 'PENDIENTE'
          },
        },
      });
      console.log(orderDetail);

      /* Creamos los tickets */
      await Promise.all(customerTicket.map(async (item, index) => {
        /* Creamos el customer */
        const customer = await API.graphql({
          query: mutation.createCustomer,
          authMode: "AMAZON_COGNITO_USER_POOLS",
          variables: {
            input: {
              fullName: item.fullName,
              ci: item.ci,
              email: item.email,
            },
          },
        });
        console.log("createCustomer", customer.data.createCustomer);

        /* Creamos el ticket */
        let i = stockVerify + index;
        console.log(i);
        const ticket = await API.graphql({
          query: mutation.createTicket,
          authMode: "AMAZON_COGNITO_USER_POOLS",
          variables: {
            input: {
              code: `${booking.code}-${i.toString().padStart(2, "0")}`,
              bookingID: booking.id,
              status: "PAID",
              customerID: customer.data.createCustomer.id,
              orderDetailID: orderDetail.data.createOrderDetail.id
            },
          },
        });
        console.log("createTicket", ticket.data.createTicket);

        /* Actualizamos el customer */
        const customerUpdate = await API.graphql({
          query: mutation.updateCustomer,
          authMode: "AWS_IAM",
          variables: {
            input: {
              id: customer.data.createCustomer.id,
              ticketID: ticket.data.createTicket.id,
            },
          },
        });
        console.log("updateCustomer", customerUpdate.data.updateCustomer);
      }));

      /* Actualizamos el stock */
      const updateBookingStock = await API.graphql({
        query: mutation.updateBooking,
        authMode: "AWS_IAM",
        variables: {
          input: {
            id: booking.id,
            stock: booking.stock - tickets,
          },
        },
      });
      console.log("updateBooking", updateBookingStock.data.updateBooking);

      setTimeout(() => {
        navigation.replace("ViewTicket", {
          data: updateBookingStock.data.updateBooking,
          order: orderDetail.data.createOrderDetail.id,
          payment: paymentOrder,
          customer: customer,
          quantity: tickets,
        });
        setRefresh(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setRefresh(false);
    }
  };
  const test = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
  };

  useEffect(() => {
    const updateSub = API.graphql({
      query: subscriptions.onUpdateBooking,
      authMode: "AWS_IAM",
      variables: {
        filter: {
          id: { eq: booking.id },
        },
      },
    }).subscribe({
      next: ({ provider, value: { data } }) => {
        setStockVerify(data?.onUpdateBooking?.stock);
        console.log(data);
      },
      error: (error) => console.warn(error),
    });
    return () => {
      updateSub.unsubscribe();
      console.log(stockVerify);
    };
  }, []);

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={[styles.topContent, global.bgWhite]}>
        {/* <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderBottomLeftRadius: 40,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        /> */}
        <View style={styles.text}>
          <Text style={[styles.titleTop, global.mainColor]}>
            Hora de pagar tu viaje
          </Text>
          <View style={[styles.ticketsContainer]}>
            <Text style={[styles.titleTickets, global.black]}>
              {tickets} boleto(s) de viaje
            </Text>
            <Text style={[styles.titlePrice, global.black]}>{total}$</Text>
          </View>
        </View>
      </View>
      <View style={[styles.content, global.bgWhite]}>
        <PaymentCard
          button={true}
          text="Pagar"
          order={{
            amount: total,
            arrival: booking.arrivalCity,
            id: customer,
            quantity: tickets,
          }}
          handlePress={onHandlePayment}
        />
        <View style={[styles.guarented, global.bgWhiteSoft]}>
          <Image
            style={{
              width: 35,
              height: 35,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/guarented.png")}
          />
          <Text style={[styles.titleGuarented, global.topGray]}>
            Esta compra esta protegida{"                         "}
          </Text>
        </View>
        <CustomButton
          text={`Obtener boleto(s)`}
          disabled={!isPaid}
          handlePress={onHandleOrder}
          textStyles={[styles.textContinue, global.white]}
          buttonStyles={[
            styles.continue,
            isPaid ? global.mainBgColor : { backgroundColor: "lightgray" },
          ]}
          loading={refresh}
          // backgroundColor
        />
        {!isPaid && (
          <Text style={{ color: "red", fontFamily: 'regular', fontSize: 12 }}>
            El pago debe estar confirmado para obtener tu boleto
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default PaymentTicket;
