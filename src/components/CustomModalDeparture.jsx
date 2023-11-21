import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import styles from "@/utils/styles/CustomModal.module.css";
import { useRecoilState } from "recoil";
import { routeSearch } from "@/atoms/Modals";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomModalDeparture = ({
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
  const [searchTerm, setSearchTerm] = useState("");
  const [push, setPush] = useState(false);
  /* Guardar valor por item seleccionado */
  const [selectRoute, setSelectRoute] = useRecoilState(routeSearch);
  let filteredStates = data.filter((item) =>
    item.estado.toLowerCase().includes(searchTerm.toLowerCase())
  );
  let filteredCities =
    selectRoute?.departureState.estado !== ""
      ? selectRoute?.departureState?.ciudades?.filter((item) =>
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
                  selectRoute?.departureState?.estado
                    ? global.white
                    : global.midGray,
                  styles.inputContainerText,
                ]}
              >
                {selectRoute?.departureState?.estado
                  ? `${selectRoute?.departureState?.estado}, ${selectRoute?.departureCity}`
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
                            departureState: item,
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
                            selectRoute?.departureState?.estado === item.estado
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
                {selectRoute?.departureState && push && (
                  <FlatList
                    data={
                      searchTerm
                        ? filteredCities
                        : selectRoute?.departureState?.ciudades
                    }
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectRoute({
                            ...selectRoute,
                            departureCity: item,
                          });
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
                            selectRoute?.departureCity === item
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
                    {`${selectRoute?.departureState?.estado}, ${
                      !push ? selectRoute.departureCity : ""
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

export default CustomModalDeparture;
