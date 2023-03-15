import { View, Text } from "react-native";
import React from "react";
import CountDown from "react-native-countdown-component";

const CustomCountDown = ({ until }) => {
  return (
    <CountDown
      size={12}
      until={until}
      timeToShow={["H", "M", "S"]}
      timeLabels={{ m: null, s: null }}
      showSeparator
    />
  );
};

export default CustomCountDown;
