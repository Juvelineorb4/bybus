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
import { API, Storage, Auth } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutation from "@/graphql/customMutations";
import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";
import * as subscriptions from "@/graphql/customSubscriptions";

const CreateTicket = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const userSelected = useRecoilValue(userSelectedPlan);
  const { booking } = route.params;
  console.log(booking);
  const { control, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState(null);
  const [quantityCustomer, setQuantityCustomer] = useState([]);
  const [stockVerify, setStockVerify] = useState(booking?.stock);
  const onHandleOrder = async (data) => {
    navigation.navigate("PaymentTicket", {
      booking: booking,
      tickets: quantity,
      customer: {
          fullName: user.name,
          email: user.email,
      },
      customerTicket: quantityCustomer,
    });
  };
  const User = async () => {
    const { attributes } = await Auth.currentAuthenticatedUser();
    setUser(attributes);
    setQuantityCustomer([
      {
        fullName: attributes?.name,
        ci: "00000000",
        email: attributes?.email,
        active: false,
      },
    ]);
  };

  useEffect(() => {
    User();
    const updateSub = API.graphql({
      query: subscriptions.onUpdateBooking,
      authMode: "AWS_IAM",
      variables: {
        filter: {
          id: { eq: booking.id },
        },
      },
    }).subscribe({
      next: ({ provider, value: { data } }) => {
        setStockVerify(data?.onUpdateBooking?.stock);
        console.log(data);
      },
      error: (error) => console.warn(error),
    });
    return () => {

      updateSub.unsubscribe();
    };
  }, []);
  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={[styles.topContent, global.bgWhite]}></View>
      <View style={styles.content}>
        <View style={styles.selectPlan}>
          <Text
            style={[
              {
                fontFamily: "bold",
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
                  fontFamily: "bold",
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
                    fontFamily: "regular",
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
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "bold",
                        fontSize: 24,
                      }}
                    >
                      {booking.departure.time.slice(0, 5)}
                    </Text>
                    <MaterialCommunityIcons
                      name="clock-time-ten-outline"
                      size={25}
                      color="black"
                    />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "bold",
                        fontSize: 24,
                      }}
                    >
                      {booking.departure.date}
                    </Text>
                    <Octicons name="calendar" size={20} color="black" />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.arrival}>
              <Text
                style={{
                  fontFamily: "bold",
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
                    fontFamily: "regular",
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
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "bold",
                        fontSize: 24,
                      }}
                    >
                      {booking.arrival.time.slice(0, 5)}
                    </Text>
                    <MaterialCommunityIcons
                      name="clock-time-ten-outline"
                      size={25}
                      color="black"
                    />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "bold",
                        fontSize: 24,
                      }}
                    >
                      {booking.arrival.date}
                    </Text>
                    <Octicons name="calendar" size={20} color="black" />
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
              <Text style={[styles.subtitleTariff, global.black]}>Total:</Text>
              <Text style={[styles.priceTariff, global.black]}>
                {(booking.price + (booking.price/booking.percentage)) * quantity}$
              </Text>
              <View style={styles.buttonsTariff}>
                <TouchableOpacity
                  activeOpacity={quantity === 1 ? 1 : 0}
                  style={[
                    styles.lessButton,
                    global.bgWhiteSoft,
                    {
                      opacity: quantity === 1 ? 0.5 : 1,
                    },
                  ]}
                  onPress={() => {
                    if (quantity === 1) return;
                    setQuantity(quantity - 1);
                    console.log("resta", quantity);
                    setQuantityCustomer((e) => {
                      let nuevoArreglo = [...e];
                      nuevoArreglo.pop();
                      return nuevoArreglo;
                    });
                  }}
                >
                  <Text style={[styles.sign, global.black]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.number, global.black]}>{quantity}</Text>
                <TouchableOpacity
                  activeOpacity={quantity === 4 ? 1 : 0}
                  style={[
                    styles.moreButton,
                    global.mainBgColor,
                    {
                      opacity: quantity === 4 ? 0.5 : 1,
                    },
                  ]}
                  onPress={() => {
                    if (quantity === 4 || stockVerify === quantity) return;
                    setQuantity(quantity + 1);
                    console.log("suma", quantity);
                    setQuantityCustomer([
                      ...quantityCustomer,
                      {
                        fullName: user?.name,
                        ci: "00000000",
                        email: user?.email,
                        active: false,
                      },
                    ]);
                  }}
                >
                  <Text style={[styles.sign, global.white]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 15,
              }}
            >
              Stock disponible: {stockVerify} (tickets)
            </Text>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 15,
                marginTop: 15,
              }}
            >
              Solo puedes seleccionar hasta 4 tickets por compra
            </Text>
          </View>
        </View>
        {quantityCustomer.map((item, index) => (
          <View style={styles.customers} key={index}>
            <Text style={[styles.titleTariff, global.mainColor]}>
              Ticket a nombre de:
            </Text>
            <Text style={{
              fontFamily: 'bold',
              fontSize: 14,
              marginBottom: 5
            }}>Nombre completo</Text>
            <View style={[styles.inputContainer, global.bgWhiteSoft]}>
              <TextInput
                value={item.fullName}
                {...styles.placeholder}
                style={styles.textInput}
                editable={item.active}
                onChangeText={(e) => {
                  const updateCustomerQ = quantityCustomer.map(
                    (customer, customerIndex) => {
                      if (index === customerIndex) {
                        return {
                          ...customer,
                          fullName: e,
                        };
                      }
                      return customer;
                    }
                  );
                  setQuantityCustomer(updateCustomerQ);
                }}
              />
            </View>
            <Text style={{
              fontFamily: 'bold',
              fontSize: 14,
              marginBottom: 5
            }}>Cedula</Text>
            <View style={[styles.inputContainer, global.bgWhiteSoft]}>
              <TextInput
                value={item.ci}
                {...styles.placeholder}
                style={styles.textInput}
                editable={item.active}
                onChangeText={(e) => {
                  const updateCustomerQ = quantityCustomer.map(
                    (customer, customerIndex) => {
                      if (index === customerIndex) {
                        return {
                          ...customer,
                          ci: e,
                        };
                      }
                      return customer;
                    }
                  );
                  setQuantityCustomer(updateCustomerQ);
                }}
              />
            </View>
            <Text style={{
              fontFamily: 'bold',
              fontSize: 14,
              marginBottom: 5
            }}>Correo electronico</Text>
            <View style={[styles.inputContainer, global.bgWhiteSoft]}>
              <TextInput
                value={item.email}
                {...styles.placeholder}
                style={styles.textInput}
                editable={item.active}
                onChangeText={(e) => {
                  const updateCustomerQ = quantityCustomer.map(
                    (customer, customerIndex) => {
                      if (index === customerIndex) {
                        return {
                          ...customer,
                          email: e,
                        };
                      }
                      return customer;
                    }
                  );
                  setQuantityCustomer(updateCustomerQ);
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                const updateCustomerQ = quantityCustomer.map(
                  (customer, customerIndex) => {
                    if (index === customerIndex) {
                      return {
                        ...customer,
                        active: !item.active,
                      };
                    }
                    return customer;
                  }
                );
                setQuantityCustomer(updateCustomerQ);
              }}
              style={[
                {
                  paddingHorizontal: 15,
                  borderRadius: 8,
                  alignSelf: "flex-end",
                  paddingVertical: 10,
                },
                global.mainBgColor,
              ]}
            >
              <Text
                style={[{ fontFamily: "regular", fontSize: 12 }, global.white]}
              >
                {item.active ? "Guardar" : "Editar"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
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
