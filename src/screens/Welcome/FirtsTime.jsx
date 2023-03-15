import { Image, Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/FirtsTime.module.css";
import { CustomButton } from "@/components";

const FirtsTime = ({navigation, route}) => {
  const global = require('@/utils/styles/global.js');
  return (
    <View style={[styles.container, global.mainBgColorSecond]}>
      <View style={styles.content}>
        <Image
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/icon.png")}
        />
        <Text style={[styles.title, global.black]}>{`Welcome`}</Text>
        <Text
          style={[styles.subtitle, global.black]}
        >{`We are now with you wherever you go in Venezuela`}</Text>
      </View>
      <CustomButton
        text={`Plan Your Trip`}
        handlePress={() => navigation.navigate('Strip')}
        textStyles={[styles.firtsTimeText, global.white]}
        buttonStyles={[styles.firtsTimeBtn, global.bgBlack]}
      />
    </View>
  );
};

export default FirtsTime;
