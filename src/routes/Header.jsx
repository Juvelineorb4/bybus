import { View } from "react-native";
import React from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import styles from "@/utils/styles/Header.module.css";

const Header = ({ mode = "" }) => {
  return (
    <View style={styles.container}>
      {mode === "back-only" ? (
        <View style={styles.header}>
          <LeftHeader styled={styles.left} />
        </View>
      ) : mode === "with-back" ? (
        <View style={styles.header}>
          <LeftHeader text="ByBus" styled={styles.left} />
          <RightHeader styled={styles.right} />
        </View>
      ) : (
        <View style={styles.header}>
          <LeftHeader text="ByBus" styled={styles.left} icon={false} />
          <RightHeader styled={styles.right} />
        </View>
      )}
    </View>
  );
};

export default Header;
