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
    <ScrollView style={styles.container}>
      <View style={styles.topContent}>
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
          <Text style={styles.title}>Create single ticket</Text>
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
                text: styles.textDatetime,
              }}
              state={`black`}
            />
            <TouchableOpacity activeOpacity={1} style={styles.searchButton}>
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
        <View style={styles.line} />
        {!userSelected && <ResultView navigation={navigation} />}
        {userSelected && <SelectedPlan />}
        <View style={styles.line} />
        <View style={styles.tariff}>
          <Text style={styles.titleTariff}>Tariff</Text>
          <View style={styles.panelTariff}>
            <View style={styles.optionTariff}>
              <Text style={styles.subtitleTariff}>Adults</Text>
              <Text style={styles.priceTariff}>$5.00</Text>
              <View style={styles.buttonsTariff}>
                <TouchableOpacity
                  style={styles.lessButton}
                  onPress={lessAdultCount}
                >
                  <Text style={styles.signBlack}>-</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{adultCout}</Text>
                <TouchableOpacity style={styles.moreButton}>
                  <Text style={styles.signWhite} onPress={moreAdultCount}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.optionTariff}>
              <Text style={styles.subtitleTariff}>Children</Text>
              <Text style={styles.priceTariff}>$3.50</Text>
              <View style={styles.buttonsTariff}>
                <TouchableOpacity
                  style={styles.lessButton}
                  onPress={lessChildrenCount}
                >
                  <Text style={styles.signBlack}>-</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{childrenCount}</Text>
                <TouchableOpacity
                  style={styles.moreButton}
                  onPress={moreChildrenCount}
                >
                  <Text style={styles.signWhite}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.total}>
          
        </View>
      </View>
      <View style={styles.button}>
        <CustomButton
          text={`Continue`}
          handlePress={() => navigation.navigate("PaymentView")}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </ScrollView>
  );
};

export default CreateTicket;
