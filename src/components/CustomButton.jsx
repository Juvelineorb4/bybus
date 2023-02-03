import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, handlePress, textStyles, buttonStyles }) => {
  return (
    <TouchableOpacity style={buttonStyles} onPress={handlePress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
