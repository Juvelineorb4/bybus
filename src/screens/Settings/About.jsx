import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/About.module.css";
import CustomText from "@/components/CustomText";
import { Icon } from "@/components";

const About = () => {
  const global = require('@/utils/styles/global.js');
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
          styled={{ title: [styles.title, global.black], subtitle: [styles.subtitle, global.topGray] }}
          title="Welcome back"
          subtitle="Access your account"
        />
      </View>
      <View>
        <View style={[global.bgWhiteSmoke, styles.line]} />
        <View style={styles.containerSelect}>
          <Text style={[styles.textSelect, global.midGray]}>App version</Text>
          <Text style={[styles.appVersion, global.black]}>1.0.0</Text>
        </View>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.containerSelect}>
          <Text style={[styles.textSelect, global.midGray]}>License</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={[styles.textSelectRight, global.black]}>Read license agreement</Text>
            <Icon name={`arrow-right`} size={20} color={`#1F1F1F`} />
          </TouchableOpacity>
        </View>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.containerSelect}>
          <Text style={[styles.textSelect, global.midGray]}>Review app</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={[styles.textSelectRight, global.black]}>Have your say</Text>
            <Icon name={`arrow-right`} size={20} color={`#1F1F1F`} />
          </TouchableOpacity>
        </View>
        <View style={[styles.line, global.bgWhiteSmoke]} />
      </View>
    </View>
  );
};

export default About;
