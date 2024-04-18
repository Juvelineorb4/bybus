import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { routeSearch } from "@/atoms/Modals";
import { useRecoilState } from "recoil";
import { Octicons } from "@expo/vector-icons";

const CustomTimeDatePicker = ({ styled = {}, state }) => {
  const [newDate, setNewDate] = useState(new Date());
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const [selectRoute, setSelectRoute] = useRecoilState(routeSearch);

  /* date */
  const selectedDate =
    String(newDate.getDate()).padStart(2, "0") +
    "-" +
    String(newDate.getMonth() + 1).padStart(2, "0");

  /* time */
  const selectedTime =
    newDate.getHours().toString().padStart(2, "0") +
    ":" +
    newDate.getMinutes().toString().padStart(2, "0");

  const onChange = ({ e, mode, date }) => {
    const currentDate = date;
    setNewDate(currentDate);
    setShow(!show);
    console.log(String(currentDate.getFullYear()));
    if (mode === "date")
      setSelectRoute({
        ...selectRoute,
        date:
          String(currentDate.getFullYear()) +
          "-" +
          String(currentDate.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(currentDate.getDate()).padStart(2, "0"),
      });
    if (mode === "time")
      setSelectRoute({
        ...selectRoute,
        time:
          currentDate.getHours().toString().padStart(2, "0") +
          ":" +
          currentDate.getMinutes().toString().padStart(2, "0"),
      });
  };

  const showDatepicker = () => {
    setMode("date");
    setShow(!show);
  };

  const showTimepicker = () => {
    // setMode("time");
    // setShow(!show);
  };

  return (
    <View style={styled.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={showDatepicker}
        style={[styled.border]}
      >
        <Text style={[styled.text]}>{selectedDate}</Text>
        {/* <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "cover",
          }}
          source={
            state === "black"
              ? require("@/utils/images/calendar-black.png")
              : require("@/utils/images/calendar.png")
          }
        /> */}
        <Octicons name="calendar" size={20} color="white" />
      </TouchableOpacity>
      {/* <TouchableOpacity
        activeOpacity={1}
        onPress={showTimepicker}
        style={[styled.border, { marginLeft: "5%" }]}
      >
        <Text style={styled.text}>{selectedTime}</Text>
        <Image
          style={{
            width: 28,
            height: 28,
            resizeMode: "cover",
          }}
          source={
            state === "black"
              ? require("@/utils/images/clock-black.png")
              : require("@/utils/images/clock-white.png")
          }
        />
      </TouchableOpacity> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={newDate}
          mode={mode}
          is24Hour={true}
          onChange={(e, date) => onChange({ e, mode, date })}
          minuteInterval={15}
        />
      )}
    </View>
  );
};

export default CustomTimeDatePicker;
