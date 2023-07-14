import { View, Text } from "react-native";
import React from "react";
import { RouteSearch } from "@/components";
import styles from "@/utils/styles/Plan.module.css";
import { BottomSheetModal } from "@/components";
import ResultView from "@/components/ResultView";
import { useRecoilValue } from "recoil";
import { planSearch } from "@/atoms/Modals";

const Plan = () => {
  const global = require("@/utils/styles/global.js");
  const search = useRecoilValue(planSearch);

  return (
    <View style={[styles.container, global.mainBgColorSecond]}>
      <View style={styles.containerSearch}>
        <RouteSearch />
      </View>
      <BottomSheetModal bottomSheetStyle={styles.bottom}>
        {search.active && <ResultView data={search}/>}
      </BottomSheetModal>
    </View>
  );
};

export default Plan;
