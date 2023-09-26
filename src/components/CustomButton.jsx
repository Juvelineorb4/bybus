import React from "react";
import { Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Icon from "./Icon";

const CustomButton = ({ text, handlePress, textStyles, buttonStyles, icon = {}, disabled = false, loading = false }) => {
  return (
    <TouchableOpacity style={buttonStyles} onPress={handlePress} disabled={disabled}>
      {loading ? <ActivityIndicator size="small" color="#ffffff" /> : text && <Text style={textStyles}>{text}</Text>}
      {icon.status ? <Icon name={icon.name} color={icon.color} size={icon.size} /> : icon.image && <Image
        style={{
          width: 30,
          height: 30,
        }}
        source={icon.image}
      />}
    </TouchableOpacity>
  );
};

export default CustomButton;
