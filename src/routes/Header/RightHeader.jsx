import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@/components";
import styles from "@/utils/styles/Header.module.css";

const RightHeader = ({ styled = {} }) => {
  const global = require('@/utils/styles/global.js');
  const navigation = useNavigation();
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
        {/* PHOTO */}
      </View>
    </View>
  );
};

export default RightHeader;
