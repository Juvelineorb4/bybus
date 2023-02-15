import { View, ScrollView } from "react-native";
import React from "react";
import { RouteSearch } from "@/components";
import styles from "@/utils/styles/Plan.module.css";
import { BottomSheetModal, RouteSelected } from "@/components";
import ResultView from "@/components/ResultView";
import { useForm } from "react-hook-form";

const Plan = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      departure: undefined,
      destination: undefined,
      date: new Date(),
    },
  });

  const handleSearch = (data) => {
    navigation.navigate("List");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <RouteSearch
          control={control}
          handleSubmit={handleSubmit(handleSearch)}
          watch={watch}
        />
      </View>
      <BottomSheetModal bottomSheetStyle={styles.bottom}>
        <ResultView navigation={navigation} />
      </BottomSheetModal>
    </View>
  );
};

export default Plan;
