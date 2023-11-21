import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/Terms.module.css";
import CustomText from "@/components/CustomText";

const Terms = () => {
  const global = require("@/utils/styles/global.js");

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <CustomText
        title={`Politicas y Privacidad`}
        subtitle={`Como procesamos tu informacion personal en ByBus C.A.`}
        styled={{
          title: [styles.title, global.black],
          subtitle: [styles.subtitle, global.topGray],
          container: styles.textContainer,
        }}
      />
      <Text style={[styles.title, global.black]}>Data controller</Text>
      <Text style={[styles.text, global.black]}>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </Text>
      <Text style={[styles.text, global.black]}>
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </Text>
      <Text style={[styles.text, global.black]}>
        Interpretation and Definitions
      </Text>
      <Text style={[styles.text, global.black]}>
        ==============================
      </Text>
      <Text style={[styles.text, global.black]}>
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </Text>
      <View style={styles.listInfo}>
        <Text style={[styles.text, global.black]}>* Email address</Text>
        <Text style={[styles.text, global.black]}>
          * First name and last name
        </Text>
        <Text style={[styles.text, global.black]}>* Phone number</Text>
        <Text style={[styles.text, global.black]}>
          * Address, State, Province, ZIP/Postal code, City
        </Text>
        <Text style={[styles.text, global.black]}>* Usage Data</Text>
      </View>
    </ScrollView>
  );
};

export default Terms;
