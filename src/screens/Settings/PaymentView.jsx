import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { tickets } from "@/utils/constants";

const PaymentView = ({navigation}) => {
  const { routes } = tickets;
  return (
    <View>
      <Text>PaymentView</Text>
      <Button
        style={styles.button}
        title='Complete your purchase'
        onPress={() => navigation.navigate(routes.view)}
      ></Button>
    </View>
  );
};

export default PaymentView;

const styles = StyleSheet.create({});
