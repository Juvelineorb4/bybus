import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "@/utils/styles/ResultView.module.css";
import { RouteCard } from "@/components";

const ResultView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Result</Text>
      <View style={styles.optionsModal}>
        {/* <View style={styles.optionDateModal}>
          <Text style={styles.textDateModal}>14:00</Text>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/clock-black.png")}
          />
        </View> */}
        <View style={styles.optionTransportModal}>
          <View
            style={[
              styles.borderIconModal,
              { backgroundColor: "#F5F5F5", padding: 3 },
            ]}
          >
            <Image
              style={{
                width: 24,
                height: 24,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/bus-black.png")}
            />
          </View>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/arrow-down.png")}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Selected")} activeOpacity={1}>
        <RouteCard />
      </TouchableOpacity>
      <RouteCard />
      <RouteCard />
      <RouteCard />
      <RouteCard />
    </View>
  );
};

export default ResultView;
