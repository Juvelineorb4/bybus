import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/About.module.css";
import CustomText from "@/components/CustomText";
import { Icon } from "@/components";

const About = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.topContent}>
        <Image
          style={{
            width: 60,
            height: 60,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={require("@/utils/images/icon.png")}
        />
        <CustomText
          styled={{ title: styles.title, subtitle: styles.subtitle }}
          title="Welcome back"
          subtitle="Access your account"
        />
      </View>
      <View>
        <View style={styles.line} />
        <View style={styles.containerSelect}>
          <Text style={styles.textSelect}>App version</Text>
          <Text style={styles.appVersion}>1.0.0</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.containerSelect}>
          <Text style={styles.textSelect}>License</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={styles.textSelectRight}>Read license agreement</Text>
            <Icon name={`arrow-right`} size={20} color={`#1F1F1F`} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.containerSelect}>
          <Text style={styles.textSelect}>Review app</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={styles.textSelectRight}>Have your say</Text>
            <Icon name={`arrow-right`} size={20} color={`#1F1F1F`} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default About;
