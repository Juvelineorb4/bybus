import { View, Alert, TouchableOpacity, Text, ScrollView } from "react-native";
import React from "react";
import { useForm } from 'react-hook-form';
import { RouteSearch, RouteSelected, RouteDestination } from '@/components';
import styles from "@/utils/styles/Plan.module.css";

const Plan = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      departure: undefined,
      destination: undefined,
      date: new Date()
    }
  });

  // resolver busqueda del route Search
  const handleSearch = (data) => {
    console.log(data)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("List")}
        >
          <Text>List Plans</Text>
        </TouchableOpacity>
        {/*
       contenedor de Route Search 
       control : para decirle a que formulario pertenece
       handleSubmut: ()=> void function para el boton de buscar 
       watch: para acceder a variables y modificar vistas textos ....
      */}
        {/* <RouteSearch control={control} handleSubmit={handleSubmit(handleSearch)} watch={watch} /> */}
        {/* <RouteSearch control={control} handleSubmit={handleSubmit(handleSearch)} watch={watch} collapsed /> */}
        {/* Ruta  selecionada */}
        {/* <RouteSelected /> */}
        {/* Ruta destino */}
        {/* <RouteDestination /> */}
      </View>
    </ScrollView>
  );
};

export default Plan;


