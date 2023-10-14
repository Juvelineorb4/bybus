import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/CreateTicket.module.css";
import { CustomButton, CustomInput, RouteSearch } from "@/components";
import { useForm } from "react-hook-form";
import CustomTimeDatePicker from "@/components/CustomTimeDatePicker";
import { useRecoilValue } from "recoil";
import { userSelectedPlan } from "@/atoms/Modals";
import ResultView from "@/components/ResultView";
import SelectedPlan from "@/components/SelectedPlan";
import { ScrollView } from "react-native-gesture-handler";
import { Auth } from "aws-amplify";

const CreateTicket = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const userSelected = useRecoilValue(userSelectedPlan);
  const { control, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState([]);
  const [full, setFull] = useState(false);
  const [fullName, setFullName] = useState('');
  const [active, setActive] = useState(false);
  const [quantityId, setQuantityId] = useState([]);
  const { booking } = route.params;
  console.log(booking)
  const handleMoreId = async (data) => {
    if (quantityId.length + 1 === quantity) {
      setFull(true);
      return;
    }
    const { cedula } = data;
    console.log(cedula);
    setQuantityId([...quantityId, 1]);
    setFull(false);
  };

  const onHandleOrder = async (data) => {
    navigation.navigate("PaymentTicket", {
      booking: booking,
      tickets: quantity,
      customer: fullName ? fullName : user[0].name,
    });
    console.log({
      booking: booking,
      tickets: quantity,
      customer: fullName ? fullName : user[0].name,
    });
  };


  useEffect(() => {
    const User = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      console.log(attributes)
      setUser([attributes]);
    };
    User();
    console.log(fullName)
  }, [fullName]);

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={[styles.topContent, global.bgWhite]}>
        {/* <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderBottomLeftRadius: 20,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.title, global.black]}>Gestiona tu viaje</Text>
        </View> */}
      </View>
      <View style={styles.content}>
        <View style={styles.selectPlan}>
          <Text
            style={[
              {
                fontFamily: "light",
                fontSize: 24,
                marginTop: 10,
                marginBottom: 15,
              },
              global.mainColor,
            ]}
          >
            Tu viaje seleccionado
          </Text>
          <View style={styles.contentSelectPlan}>
            <View style={styles.departure}>
              <Text
                style={{
                  fontFamily: "thin",
                  fontSize: 20,
                  marginBottom: 5,
                }}
              >
                Desde:
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "thinItalic",
                    fontSize: 16,
                    marginBottom: 10,
                  }}
                >
                  {booking.departure.state}, {booking.departure.city}
                </Text>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontFamily: "light",
                        fontSize: 24,
                      }}
                    >
                      {booking.departure.time.slice(0, 5)}
                    </Text>
                    <Image
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "cover",
                        position: "relative",
                        top: -1,
                      }}
                      source={require("@/utils/images/clock-black.png")}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontFamily: "thin",
                        fontSize: 24,
                      }}
                    >
                      {booking.departure.date}
                    </Text>
                    <Image
                      style={{
                        width: 26,
                        height: 26,
                        resizeMode: "cover",
                        position: "relative",
                        top: 2.5,
                        left: 4,
                      }}
                      source={require("@/utils/images/calendar-black.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.arrival}>
              <Text
                style={{
                  fontFamily: "thin",
                  fontSize: 20,
                  marginBottom: 5,
                }}
              >
                Hasta:
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "thinItalic",
                    fontSize: 16,
                    marginBottom: 10,
                  }}
                >
                  {booking.arrival.state}, {booking.arrival.city}
                </Text>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontFamily: "light",
                        fontSize: 24,
                      }}
                    >
                      {booking.arrival.time.slice(0, 5)}
                    </Text>
                    <Image
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "cover",
                        position: "relative",
                        top: -1,
                      }}
                      source={require("@/utils/images/clock-black.png")}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontFamily: "thin",
                        fontSize: 24,
                      }}
                    >
                      {booking.arrival.date}
                    </Text>
                    <Image
                      style={{
                        width: 26,
                        height: 26,
                        resizeMode: "cover",
                        position: "relative",
                        top: 2.5,
                        left: 4,
                      }}
                      source={require("@/utils/images/calendar-black.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tariff}>
          <Text style={[styles.titleTariff, global.mainColor]}>Tarifas</Text>
          <View style={styles.panelTariff}>
            <View style={styles.optionTariff}>
              <Text style={[styles.subtitleTariff, global.black]}>
                Cantidad
              </Text>
              <Text style={[styles.priceTariff, global.black]}>
                ${booking.price}.00
              </Text>
              <View style={styles.buttonsTariff}>
                <TouchableOpacity
                  style={[styles.lessButton, global.bgWhiteSoft]}
                  onPress={() => {
                    if (quantity === 1) return;
                    setQuantity(quantity - 1);
                    console.log("resta", quantity);
                  }}
                >
                  <Text style={[styles.sign, global.black]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.number, global.black]}>{quantity}</Text>
                <TouchableOpacity
                  style={[styles.moreButton, global.mainBgColor]}
                  onPress={() => {
                    setQuantity(quantity + 1);
                    console.log("suma", quantity);
                  }}
                >
                  <Text style={[styles.sign, global.white]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.customers}>
          <Text style={[styles.titleTariff, global.mainColor]}>
            Ticket a nombre de:
          </Text>
          <View style={[styles.inputContainer, global.bgWhiteSoft]}>
            <TextInput
              defaultValue={user[0] ? user[0].name : "Esperando..."}
              {...styles.placeholder}
              style={styles.textInput}
              editable={active}
              onChangeText={(e) => setFullName(e)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setActive(!active);
            }}
            style={[
              {paddingHorizontal: 15, borderRadius: 8, alignSelf: 'flex-end', paddingVertical: 10},
              global.mainBgColor
            ]}
          >
            <Text style={[{fontFamily: 'light', fontSize: 12}, global.white]}>{!active ? "Editar" : "Guardar"}</Text>
          </TouchableOpacity>
          {/* {quantityId.map((_, index) => (
            <CustomInput
              key={index}
              control={control}
              name={`cedula_${index}`}
              placeholder={"00000000"}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                input: [styles.inputContainer, global.bgWhiteSoft],
                placeholder: styles.placeholder,
              }}
              icon={require("@/utils/images/profile_default.png")}
              rules={{
                required: "Requerido",
              }}
            />
          ))} */}
          {/* {quantityId.length < 1 && (
            <Text
              style={{
                fontFamily: "thinItalic",
                fontSize: 14,
              }}
            >
              ¿Todos los boletos de viaje seran asociados a una unica cedula? Si
              no es asi entonces agrega mas cedulas abajo
            </Text>
          )} */}
          {/* <TouchableOpacity
            onPress={handleMoreId}
            style={[
              {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                width: 200,
                borderRadius: 8,
                paddingVertical: 20,
                marginTop: 20,
              },
              global.mainBgColorSecond,
            ]}
          >
            <Text
              style={[
                {
                  fontFamily: "light",
                  fontSize: 16,
                },
                global.white,
              ]}
            >
              Agregar mas cedulas
            </Text>
          </TouchableOpacity>
          {full && <Text
              style={{
                fontFamily: "light",
                fontSize: 14,
                color: 'red',
                paddingTop: 10
              }}
            >
              Solo puedes agregar las misma cantidad de cedulas que tienes de boletos
            </Text>} */}
        </View>
      </View>
      <View style={styles.button}>
        <CustomButton
          text={`Continuar`}
          handlePress={handleSubmit(onHandleOrder)}
          textStyles={[styles.textContinue, global.white]}
          buttonStyles={[styles.continue, global.mainBgColor]}
        />
      </View>
    </ScrollView>
  );
};

export default CreateTicket;
