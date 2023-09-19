import { Image, Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Notifications.module.css";
import { ScrollView } from "react-native-gesture-handler";
import CustomDropDown from "@/components/CustomDropDown";

const Notifications = () => {
  const global = require('@/utils/styles/global.js');
  const items = [
    { label: "Latest", value: "latest" },
    { label: "Newest", value: "newest" },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "-28%",
          resizeMode: "contain",
        }}
        source={require("@/utils/images/texture.png")}
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 50,
          }}
        >
          <View style={[styles.countNotifications, global.bgBlack]}>
            <Text style={[styles.textCountNotifications, global.white]}>2</Text>
          </View>
          <Text style={[styles.title, global.black]}>Nuevas notificaciones</Text>
          <CustomDropDown
            list={items}
            styled={{
              container: styles.picker,
              item: [styles.pickerItem, global.black],
            }}
            global={`notification`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;