import { View, Text } from "react-native";
import React from "react";
import { RouteSearch } from "@/components";
import styles from "@/utils/styles/Plan.module.css";
import { BottomSheetModal } from "@/components";
import ResultView from "@/components/ResultView";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userSelectedPlan } from "@/atoms/Modals";
import SelectedPlan from "@/components/SelectedPlan";

const Plan = ({ navigation }) => {
  const global = require('@/utils/styles/global.js');
  const userSelected = useRecoilValue(userSelectedPlan);
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      departure: undefined,
      destination: undefined,
      date: new Date(),
    },
  });

  const handleSearch = () => {
    navigation.navigate("List");
  };

  return (
    <View style={[styles.container, global.mainBgColorSecond]}>
        <View style={styles.containerSearch}>
          <RouteSearch
            control={control}
            handleSubmit={handleSubmit(handleSearch)}
            watch={watch}
          />
        </View>
        <BottomSheetModal bottomSheetStyle={styles.bottom}>
          {!userSelected && <ResultView navigation={navigation} />}
          {userSelected && (
            <SelectedPlan />
          )}
        </BottomSheetModal>
    </View>
  );
};

export default Plan;
