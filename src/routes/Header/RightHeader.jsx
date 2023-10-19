import { View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@/components";
import styles from "@/utils/styles/Header.module.css";

// Reocil
import { useRecoilValue } from "recoil";
import { imageProfile } from "@/atoms/Modals";

const RightHeader = ({ styled = {} }) => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const imgProfile = useRecoilValue(imageProfile);
  return (
    <View style={styles.right}>
   
    </View>
  );
};

export default RightHeader;
