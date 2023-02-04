import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({name, color, size, handlePress}) => {
  return (
    <MaterialCommunityIcons name={name} color={color} size={size} onPress={handlePress} />
  )
}

export default Icon