import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  FlatList,
  TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import styles from "@/utils/styles/CustomModal.module.css";
import { useRecoilState } from "recoil";
import { routeSearch } from "@/atoms/Modals";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomModalArrival = ({
  label,
  placeholder,
  name,
  control,
  rules,
  text,
  data,
}) => {
  const global = require("@/utils/styles/global.js");

  /* Estaticos */
  const [selectError, setSelectError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [push, setPush] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  /* Guardar valor por item seleccionado */
  const [selectRoute, setSelectRoute] = useRecoilState(routeSearch);
  let filteredStates = data.filter((item) =>
    item.estado.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(selectRoute?.arrivalState.estado !== '')
  let filteredCities =
    selectRoute?.arrivalState.estado !== ''
      ? selectRoute?.arrivalState?.ciudades?.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : "";


  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={() => (
        <>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.inputContainer}>
              {/* <Image
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: "contain",
                }}
                source={require("@/utils/images/target-white.png")}
              /> */}
              <MaterialCommunityIcons name="target" size={24} color="white" />
              <Text
                style={[
                  selectRoute?.arrivalState?.estado
                    ? global.white
                    : global.midGray,
                  styles.inputContainerText,
                ]}
              >
                {selectRoute?.arrivalState?.estado
                  ? `${selectRoute?.arrivalState?.estado}, ${selectRoute?.arrivalCity}`
                  : placeholder}
              </Text>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
                source={require("@/utils/images/arrow_down.png")}
              />
            </View>
          </TouchableOpacity>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalTop}>
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setPush(false);
                    }}
                  >
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: "contain",
                      }}
                      source={require("@/utils/images/arrow_back.png")}
                    />
                  </Pressable>
                  <Text style={styles.modalText}>
                    {push ? `Seleccione la ciudad` : `Seleccione el estado`}
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: "black",
                    borderRadius: 4,
                    padding: 10,
                    marginBottom: 25,
                  }}
                >
                  <TextInput
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    placeholder="Busca tu estado"
                    style={{
                      fontFamily: "regular",
                    }}
                  />
                </View>
                {!push && (
                  <FlatList
                    data={searchTerm !== "" ? filteredStates : data}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectRoute({
                            ...selectRoute,
                            arrivalState: item,
                          });
                          setPush(true);
                          setSearchTerm("");
                        }}
                        style={[
                          {
                            marginVertical: 5,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            selectRoute?.arrivalState?.estado === item.estado
                              ? global.mainBgColorSecond
                              : global.bgWhite,
                            styles.textListModal,
                          ]}
                        >
                          {item.estado}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={true}
                  />
                )}
                {selectRoute?.arrivalState && push && (
                  <FlatList
                    data={
                      searchTerm
                        ? filteredCities
                        : selectRoute?.arrivalState?.ciudades
                    }
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectRoute({ ...selectRoute, arrivalCity: item });
                          setPush(false);
                          setModalVisible(!modalVisible);
                          setSearchTerm("");
                        }}
                        style={[
                          {
                            marginVertical: 5,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            selectRoute?.arrivalCity === item
                              ? global.mainBgColorSecond
                              : global.bgWhite,
                            styles.textListModal,
                          ]}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={true}
                  />
                )}
                <View style={styles.modalBot}>
                  <Text style={styles.modalTextSelect}>
                    Seleccionaste:{" "}
                    {`${selectRoute?.arrivalDeparture?.estado}, ${
                      !push ? selectRoute?.arrivalCity : ""
                    }`}
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </>
      )}
    />
  );
};

export default CustomModalArrival;
