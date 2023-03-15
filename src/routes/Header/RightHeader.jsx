import { View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@/components";
import styles from "@/utils/styles/Header.module.css";

// Reocil
import { useRecoilValue } from 'recoil'
import { imageProfile } from '@/atoms/Modals'

const RightHeader = ({ styled = {} }) => {
  const global = require('@/utils/styles/global.js');
  const navigation = useNavigation();
  const imgProfile = useRecoilValue(imageProfile)
  return (
    <View style={styles.right}>
      <View style={[styles.notifications, global.bgBlack]}>
        <Icon
          name="bell-outline"
          size={25}
          color="#FFFFFF"
          handlePress={() => navigation.navigate("Notifications")}
        />
      </View>
      <View style={styles.user}>
        {/* Falta colocar una imagen por defaul cuando nadie est elogeado */}
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            resizeMode: "cover"
          }}
          source={{ uri: imgProfile && imgProfile }}
        />
      </View>
    </View>
  );
};

export default RightHeader;
