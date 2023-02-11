import { View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Plan.module.css";
import { BottomSheetModal, RouteSelected} from "@/components";
import { useForm } from 'react-hook-form';
import ResultView from "@/components/ResultView";

const List = ({ navigation, route }) => {
  const { control, handleSubmit, watch } = useForm();

  return (
    <>
      <View style={styles.container}>
        <RouteSelected />
      </View>
      <BottomSheetModal bottomSheetStyle={styles.bottom}>
        <ResultView navigation={navigation} />
      </BottomSheetModal>
    </>
  );
};

export default List;
