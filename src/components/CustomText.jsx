import { View, Text } from "react-native";
import React from "react";

const CustomText = ({styled={title, subtitle, container}, title, subtitle}) => {
  return (
    <View style={styled.container}>
      <Text style={styled.title}>{title}</Text>
      <Text style={styled.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default CustomText;
