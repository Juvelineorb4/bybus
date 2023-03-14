import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/CreateTicket.module.css";
import { CustomButton, RouteSearch } from "@/components";
import { useForm } from "react-hook-form";
import CustomTimeDatePicker from "@/components/CustomTimeDatePicker";
import { useRecoilValue } from "recoil";
import { userSelectedPlan } from "@/atoms/Modals";
import ResultView from "@/components/ResultView";
import SelectedPlan from "@/components/SelectedPlan";
import { ScrollView } from "react-native-gesture-handler";

const CreateTicket = ({ navigation }) => {
  const global = require('@/utils/styles/global.js');

  // const { control, handleSubmit, watch } = useForm({
  //   defaultValues: {
  //     departure: undefined,
  //     destination: undefined,
  //     date: new Date(),
  //   },
  // });

  // const handleSearch = () => {
  //   navigation.navigate("PaymentView");
  // };
  const userSelected = useRecoilValue(userSelectedPlan);
  const [adultCout, setAdultCout] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const moreAdultCount = () => {
    setAdultCout(adultCout + 1);
  };
  const lessAdultCount = () => {
    if (adultCout === 0) {
      return;
    }
    setAdultCout(adultCout - 1);
  };
  const moreChildrenCount = () => {
    setChildrenCount(childrenCount + 1);
  };
  const lessChildrenCount = () => {
    if (childrenCount === 0) {
      return;
    }
    setChildrenCount(childrenCount - 1);
  };
  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={[styles.topContent, global.bgWhite]}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderBottomLeftRadius: 40,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.title, global.black]}>Create single ticket</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.search}>
          <View style={styles.inputs}>
            <View style={styles.input}>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/target-black.png")}
              />
              <TextInput
                style={styles.inputText}
                placeholder={`Barquisimeto, Lara`}
                placeholderTextColor={`#9d9d9d`}
              />
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/close.png")}
              />
            </View>
            <View style={styles.input}>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/destination.png")}
              />
              <TextInput
                style={styles.inputText}
                placeholder={`Guanare, Portuguesa`}
                placeholderTextColor={`#9d9d9d`}
              />
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/arrow-white.png")}
              />
            </View>
          </View>
          <View style={styles.options}>
            <CustomTimeDatePicker
              styled={{
                container: styles.containerDatetime,
                border: styles.borderDatetime,
                text: [styles.textDatetime, global.black],
              }}
              state={`black`}
            />
            <TouchableOpacity activeOpacity={1} style={[styles.searchButton, global.mainBgColor]}>
              <Image
                style={{
                  width: 32,
                  height: 32,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/search-black.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        {!userSelected && <ResultView navigation={navigation} />}
        {userSelected && <SelectedPlan />}
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.tariff}>
          <Text style={[styles.titleTariff, global.black]}>Tariff</Text>
          <View style={styles.panelTariff}>
            <View style={styles.optionTariff}>
              <Text style={[styles.subtitleTariff, global.black]}>Adults</Text>
              <Text style={[styles.priceTariff, global.black]}>$5.00</Text>
              <View style={styles.buttonsTariff}>
                <TouchableOpacity
                  style={[styles.lessButton, global.bgWhiteSoft]}
                  onPress={lessAdultCount}
                >
                  <Text style={[styles.signBlack, global.black]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.number, global.black]}>{adultCout}</Text>
                <TouchableOpacity style={[styles.moreButton, global.bgBlack]}>
                  <Text style={[styles.signWhite, global.white]} onPress={moreAdultCount}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.optionTariff}>
              <Text style={[styles.subtitleTariff, global.black]}>Children</Text>
              <Text style={[styles.priceTariff, global.black]}>$3.50</Text>
              <View style={styles.buttonsTariff}>
                <TouchableOpacity
                  style={[styles.lessButton, global.bgWhiteSoft]}
                  onPress={lessChildrenCount}
                >
                  <Text style={[styles.signBlack, global.black]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.number, global.black]}>{childrenCount}</Text>
                <TouchableOpacity
                  style={[styles.moreButton, global.bgBlack]}
                  onPress={moreChildrenCount}
                >
                  <Text style={[styles.signWhite, global.white]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.total}>
          
        </View>
      </View>
      <View style={styles.button}>
        <CustomButton
          text={`Continue`}
          handlePress={() => navigation.navigate("PaymentTicket")}
          textStyles={[styles.textContinue, global.white]}
          buttonStyles={[styles.continue, global.bgBlack]}
        />
      </View>
    </ScrollView>
  );
};

export default CreateTicket;
