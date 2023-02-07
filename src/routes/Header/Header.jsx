import { View } from "react-native";
import React from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import styles from "@/utils/styles/Header.module.css";

const Header = ({ mode = "" }) => {
  return (
    <View style={styles.container}>
      {mode === "back-only" ? (
        <View style={styles.headerBO}>
          <LeftHeader />
        </View>
      ) : mode === "with-back" ? (
        <View style={styles.headerWB}>
          <LeftHeader text="ByBus" />
          <RightHeader />
        </View>
      ) : (
        <View style={styles.header}>
          <LeftHeader text="ByBus" icon={false} />
          <RightHeader />
        </View>
      )}
    </View>
  );
};

export default Header;
