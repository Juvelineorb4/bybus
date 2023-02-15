import React, { useState } from "react";
import styles from "@/utils/styles/RouteSearch.module.css";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CustomTimeDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  /* date */
  const selectedDate =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth() + 1).padStart(2, "0")

  /* time */
  const selectedTime = date.getHours() + ":" + date.getMinutes();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShow(false);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(!show);
  };

  const showTimepicker = () => {
    showMode("time");
    setShow(!show);
  };

  return (
    <View style={styles.containerDatetime}>
      <TouchableOpacity activeOpacity={1} onPress={showDatepicker} style={[styles.borderDatetime, { marginRight: 10}]}>
        <Text style={styles.textDatetime}>{selectedDate}</Text>
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/calendar.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} onPress={showTimepicker} style={styles.borderDatetime}>
        <Text style={styles.textDatetime}>{selectedTime}</Text>
        <Image
          style={{
            width: 28,
            height: 28,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/clock-white.png")}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default CustomTimeDatePicker;
