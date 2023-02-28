import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CustomTimeDatePicker = ({styled = {}, state}) => {
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
    <View style={styled.container}>
      <TouchableOpacity activeOpacity={1} onPress={showDatepicker} style={[styled.border]}>
        <Text style={styled.text}>{selectedDate}</Text>
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "cover",
          }}
          source={state === 'black' ? require("@/utils/images/calendar-black.png") : require("@/utils/images/calendar.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} onPress={showTimepicker} style={[styled.border, {marginLeft: '5%'}]}>
        <Text style={styled.text}>{selectedTime}</Text>
        <Image
          style={{
            width: 28,
            height: 28,
            resizeMode: "cover",
          }}
          source={state === 'black' ? require("@/utils/images/clock-black.png") : require("@/utils/images/clock-white.png")}
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
