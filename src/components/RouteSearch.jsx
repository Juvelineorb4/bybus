import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import styles from "@/utils/styles/RouteSearch.module.css";
import Icon from "./Icon";
// libreria del picker
import CustomDatePicker from "./CustomDatePicker";
import CustomTimePicker from "./CustomTimePicker";

{
  /*
       contenedor de Route Search 
       control : para decirle a que formulario pertenece
       handleSubmut: ()=> void function para el boton de buscar 
       watch: para acceder a variables y modificar vistas textos ....
      */
}

const RouteSearch = ({ control, handleSubmit, watch, collapsed = false }) => {
  // estado que sirve para mostrar o ocultar el picker
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  // accedemos a la variable date
  const time = watch(["time", "date"]);
  const date = watch(["date", "date"]);

  //    funcion para setear a true la vista del picker
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const showTimePicker = () => {
    setIsTimePickerVisible(true);
  };

  return (
    <View style={[styles.container, styles.containerRouteSearch]}>
      {/* rectangulo de decoracion */}
      <View
        style={{
          backgroundColor: "white",
          height: 5,
          width: 50,
          borderRadius: 50,
          marginTop: 8,
          marginBottom: 15,
        }}
      />
      {/* Input Partida */}
      {!collapsed && (
        <CustomInput
          control={control}
          name={"departure"}
          placeholder={"Barquisimeto, Lara"}
          number={false}
          icon={{
            name: "target",
            color: "#FFFFFF",
            size: 25,
          }}
          styled={{
            text: styles.textInput,
            input: styles.inputContainer,
          }}
          placeholderTextColor={"#FFFFFF"}
          iconRight={{
            name: "close",
            color: "#404040",
            size: 25,
          }}
        />
      )}
      {/*Input Destino */}
      <CustomInput
        control={control}
        name={"destination"}
        placeholder={"Guanare, Portuguesa"}
        number={false}
        icon={{
          name: "map-marker-radius-outline",
          color: "#FFFFFF",
          size: 25,
        }}
        styled={{
          text: styles.textInput,
          input: styles.inputContainer,
        }}
        placeholderTextColor={"#FFFFFF"}
        iconRight={{
          name: "swap-vertical",
          color: "#404040",
          size: 25,
        }}
      />
      {/* container Options */}
      <View style={styles.containerOption}>
        {/* fecha */}
        <TouchableOpacity style={styles.containerDate} onPress={showDatePicker}>
          <Text
            style={{ color: "white", marginRight: 5 }}
          >{`${new Date().getUTCDate()}`}</Text>
          <Icon name={"calendar-month-outline"} color={"white"} size={20} />
          <CustomDatePicker
            control={control}
            isVisible={isDatePickerVisible}
            setIsVisible={setIsDatePickerVisible}
          />
        </TouchableOpacity>
        {/* Hora */}
        <TouchableOpacity style={styles.containerHour} onPress={showTimePicker}>
          <Text
            style={{ color: "white", marginRight: 5 }}
          >{`${new Date().getHours()}:${new Date().getMinutes()}`}</Text>
          <Icon name={"clock-outline"} color={"white"} size={20} />
          <CustomTimePicker
            control={control}
            isVisible={isTimePickerVisible}
            setIsVisible={setIsTimePickerVisible}
          />
        </TouchableOpacity>
        {/* tipo transporte */}
        <TouchableOpacity style={styles.containerTransport}>
          <Icon name={"bus"} color={"white"} size={20} />
          <Icon name={"chevron-down"} color={"white"} size={20} />
        </TouchableOpacity>
        {/* button search*/}
        <TouchableOpacity
          style={styles.containerSearchBtn}
          onPress={handleSubmit}
        >
          <Icon name={"map-search-outline"} color={"white"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RouteSearch;
