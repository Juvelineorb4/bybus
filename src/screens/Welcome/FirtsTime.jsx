import { Image, Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/FirtsTime.module.css";
import { CustomButton } from "@/components";

const FirtsTime = ({navigation, route}) => {
  const global = require('@/utils/styles/global.js');
  return (
    <View style={[styles.container, global.mainBgColorSecond]}>
      <View style={styles.content}>
        {/* <Image
          style={{
            width: 200,
            height: 40,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/icon.png")}
        /> */}
        <Text style={[styles.title, global.white]}>{`Bienvenido`}</Text>
        <Text
          style={[styles.subtitle, global.white]}
        >{`Llegamos a cualquier parte de Venezuela`}</Text>
      </View>
      <CustomButton
        text={`Busca tu proximo destino`}
        handlePress={() => navigation.navigate('Strip')}
        textStyles={[styles.firtsTimeText, global.white]}
        buttonStyles={[styles.firtsTimeBtn, global.mainBgColor]}
      />
    </View>
  );
};

export default FirtsTime;
