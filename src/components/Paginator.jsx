import { Text, View, useWindowDimensions } from "react-native";
import React from "react";
import styles from "@/utils/styles/Strip.module.css";

const Paginator = ({ scrollX, data }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.paginator}>
      {data.map((_, i) => {
        let inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp'
        })
        return <View style={[styles.dot, { width: 32 }]} key={i.toString()} />;
      })}
    </View>
  );
};

export default Paginator;
