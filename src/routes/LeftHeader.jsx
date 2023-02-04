import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LeftHeader = ({ text = "", icon = true, styled = {} }) => {
  const navigation = useNavigation();
  return (
    <View styles={styled}>
      {icon && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 45,
              height: 45,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/back-icon.png")}
          />
        </TouchableOpacity>
      )}
      {text && <Text onPress={() => navigation.navigate("Home")}>{text}</Text>}
    </View>
  );
};

export default LeftHeader;
