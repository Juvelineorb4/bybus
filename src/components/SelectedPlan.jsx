import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { userSelectedPlan } from "@/atoms/Modals";
import { useRecoilState } from "recoil";
import styles from "@/utils/styles/SelectedPlan.module.css";
import CustomDropDown from "./CustomDropDown";
import { useNavigation } from "@react-navigation/native";

const SelectedPlan = () => {

  const global = require('@/utils/styles/global.js');
  const navigation = useNavigation();

  const [userSelected, setUserSelected] = useRecoilState(userSelectedPlan);

  const checkUserSelected = async () => {
    try {
      setUserSelected(userSelected);
    } catch (error) {
      setUserSelected(null);
    }
  };

  const updateUserSelected = () => setUserSelected(!userSelected);

  const items = [
    { label: "Adult Ticket", value: "adult-ticket" },
    { label: "Children Ticket", value: "children-ticket" },
  ];

  useEffect(() => {
    checkUserSelected();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={updateUserSelected}>
          <Image
            style={{
              width: 28,
              height: 28,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/back-icon.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.title, global.black]}>Your departure</Text>
        <View></View>
      </View>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text style={[styles.textHour, global.black]}>14:05</Text>
          <View style={[styles.notificationAdd, global.mainBgColor]}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/bell-add.png")}
            />
          </View>
        </View>
        <View style={styles.topTwoContent}>
          <View style={styles.departure}>
            <Text style={[styles.states, global.midGray]}>Lara</Text>
            <Text style={[styles.city, global.topGray]}>Barquisimeto</Text>
          </View>
          <Text style={[styles.to, global.topGray]}>To</Text>
          <View style={styles.destination}>
            <Text style={[styles.states, global.midGray]}>Portuguesa</Text>
            <Text style={[styles.city, global.topGray]}>Guanare</Text>
          </View>
        </View>
        <View style={styles.tags}>
          <View style={styles.wifi}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/wifi.png")}
            />
            <Text style={[styles.tagText, global.black]}>Free Wifi</Text>
          </View>
          <View style={styles.guarantees}>
            <Image
              style={{
                width: 28,
                height: 28,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/guarantee.png")}
            />
            <Text style={[styles.tagText, global.black]}>Travel Guarantees</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <CustomDropDown
            list={items}
            styled={{
              container: styles.picker,
              item: [styles.pickerItem, global.black],
            }}
            global={`ticket-plan`}
          />
          <TouchableOpacity style={[styles.buttonBuy, global.bgBlack]} onPress={() => navigation.navigate("ViewTicketPlan")}>
            <Text style={[styles.textBuy, global.white]}>Buy 5.00$</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectedPlan;
