import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const CustomButton = ({ text, handlePress, textStyles, buttonStyles, icon={} }) => {
  return (
    <TouchableOpacity style={buttonStyles} onPress={handlePress}>
      {text && <Text style={textStyles}>{text}</Text>}
      {icon.status && <Icon name={icon.name} color={icon.color} size={icon.size} />}
    </TouchableOpacity>
  );
};

export default CustomButton;
