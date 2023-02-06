import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomInput from './CustomInput';
import styles from "@/utils/styles/RouteSearch.module.css";
import Icon from "./Icon"
// libreria del picker
import CustomDatePicker from './CustomDatePicker';


{/*
       contenedor de Route Search 
       control : para decirle a que formulario pertenece
       handleSubmut: ()=> void function para el boton de buscar 
       watch: para acceder a variables y modificar vistas textos ....
      */}

const RouteSearch = ({ control, handleSubmit, watch, collapsed = false }) => {
    // estado que sirve para mostrar o ocultar el picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    // accedemos a la variable date
    const date = watch("date")


    //    funcion para setear a true la vista del picker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };


    return (
        <View style={[styles.container, styles.containerRouteSearch]}>
            {/* rectangulo de decoracion */}
            <View style={{
                backgroundColor: "white", height: 5, width: 50, borderRadius: 50,
                marginTop: 8, marginBottom: 15,
            }} />
            {/* Input Partida */}
            {!collapsed && <CustomInput
                control={control}
                name={"departure"}
                placeholder={"Barquisimeto, Lara"}
                number={false}
                icon={{
                    name: "home-map-marker",
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
            />}
            {/*Input Destino */}
            <CustomInput
                control={control}
                name={"destination"}
                placeholder={"Guanare, Portuguesa"}
                number={false}
                icon={{
                    name: "map-marker-radius",
                    color: "#FFFFFF",
                    size: 25,
                }}
                styled={{
                    text: styles.textInput,
                    input: styles.inputContainer,
                }}
                placeholderTextColor={"#FFFFFF"}
                iconRight={{
                    name: "arrow-all",
                    color: "#404040",
                    size: 25,
                }}
            />


            {/* container Options */}
            <View style={styles.containerOption}>
                {/* Hora */}
                <TouchableOpacity style={styles.containerHour} onPress={showDatePicker}>
                    <Text style={{ color: "white", marginRight: 5 }}>{`${new Date(date).getHours()}:${new Date(date).getMinutes()}`}</Text>
                    <Icon name={"clock-outline"} color={"white"} size={20} />
                    <CustomDatePicker control={control} isVisible={isDatePickerVisible} setIsVisible={setDatePickerVisibility} />
                </TouchableOpacity>
                {/* tipo transporte */}
                <TouchableOpacity style={styles.containerTransport} >
                    <Icon name={"bus"} color={"white"} size={20} />
                    <Icon name={"chevron-down"} color={"white"} size={20} />
                </TouchableOpacity>
                {/* button search*/}
                <TouchableOpacity style={styles.containerSearchBtn} onPress={handleSubmit}>
                    <Icon name={"map-search-outline"} color={"white"} size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RouteSearch
