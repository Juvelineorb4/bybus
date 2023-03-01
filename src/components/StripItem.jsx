import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import styles from "@/utils/styles/Strip.module.css";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

const StripItem = ({ item, button = true }) => {
  const global = require('@/utils/styles/global.js');
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.content, { width }]}>
      <View style={[styles.imageContainer, global.mainBgColor]}>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
      </View>
      <View style={[styles.textContainer, { width }]}>
        <Text style={[styles.title, global.black]}>{item.title}</Text>
        <Text style={[styles.subtitle, global.black]}>{item.subtitle}</Text>
        {button && <CustomButton
          text={`Next`}
          handlePress={() => navigation.navigate("Home")}
          textStyles={[styles.textNext, global.white]}
          buttonStyles={[styles.next, global.bgBlack]}
        />}
      </View>
    </View>
  );
};

export default StripItem;
