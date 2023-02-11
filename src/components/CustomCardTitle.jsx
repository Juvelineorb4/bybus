import { View, Text } from "react-native";
import React from "react";
import Icon from "./Icon";

const CustomCardTitle = ({title, icon={}, styled={}}) => {
  return (
    <View style={styled.topText}>
      <Icon name={icon.name} size={icon.size} color={icon.color} />
      <Text style={styled.title}>{title}</Text>
    </View>
  );
};

export default CustomCardTitle;
