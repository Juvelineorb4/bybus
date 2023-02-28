import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "@/utils/styles/ResultView.module.css";
import { RouteCard } from "@/components";
import { useRecoilState } from "recoil";
import { userSelectedPlan } from "@/atoms/Modals";

const ResultView = ({ navigation }) => {
  const [userSelected, setUserSelected] = useRecoilState(userSelectedPlan);

  const checkUserSelected = async () => {
    try {
      setUserSelected(userSelected);
    } catch (error) {
      setUserSelected(null);
    }
  };
  useEffect(() => {
    checkUserSelected();
  }, []);

  const updateUserSelected = () => setUserSelected(!userSelected)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Result</Text>
      <View style={styles.optionsModal}>
        <View style={styles.optionTransportModal}>
          <View
            style={[
              styles.borderIconModal,
              { backgroundColor: "#F5F5F5", padding: 3 },
            ]}
          >
            <Image
              style={{
                width: 24,
                height: 24,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/bus-black.png")}
            />
          </View>
          <Image
            style={{
              width: 24,
              height: 24,
              resizeMode: "cover",
            }}
            source={require("@/utils/images/arrow-down.png")}
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={1} onPress={updateUserSelected}>
        <RouteCard />
      </TouchableOpacity>

    </View>
  );
};

export default ResultView;
