import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const CustomButton = ({ text, handlePress, textStyles, buttonStyles, icon = {}, disabled = false }) => {
  return (
    <TouchableOpacity style={buttonStyles} onPress={handlePress} disabled={disabled}>
      {text && <Text style={textStyles}>{text}</Text>}
      {icon.status && <Icon name={icon.name} color={icon.color} size={icon.size} />}
    </TouchableOpacity>
  );
};

export default CustomButton;
