import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { RouteSearch } from "@/components";
import styles from "@/utils/styles/Plan.module.css";
import { BottomSheetModal } from "@/components";
import ResultView from "@/components/ResultView";
import { useRecoilValue } from "recoil";
import { planSearch } from "@/atoms/Modals";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

const Plan = () => {
  const global = require("@/utils/styles/global.js");
  const search = useRecoilValue(planSearch);

  useEffect(() => {
    const User = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      console.log(attributes)
    };
    User();
  }, []);

  return (
    <View style={[styles.container, global.mainBgColorSecond]}>
      <View style={styles.containerSearch}>
        <RouteSearch />
      </View>
      <BottomSheetModal bottomSheetStyle={styles.bottom}>
        {search.active ? (
          <ResultView data={search} />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/search-big.png")}
            />
            <Text
              style={{
                fontFamily: "bold",
                textAlign: "center",
                fontSize: 24,
                paddingHorizontal: 20
              }}
            >
              Montserrat Bold
            </Text>
            <Text
              style={{
                fontFamily: "regular",
                textAlign: "center",
                fontSize: 24,
                paddingHorizontal: 20
              }}
            >
              Montserrat Normal
            </Text>
            <Text
              style={{
                fontFamily: "notoRegular",
                textAlign: "center",
                fontSize: 24,
                paddingHorizontal: 20
              }}
            >
              NotoSerif Normal
            </Text>
            <Text
              style={{
                fontFamily: "notoBold",
                textAlign: "center",
                fontSize: 24,
                paddingHorizontal: 20
              }}
            >
              NotoSerif Bold
            </Text>
          </View>
        )}
      </BottomSheetModal>
    </View>
  );
};

export default Plan;
