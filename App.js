import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Navigation from "@/routes/Navigation";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { RecoilRoot } from "recoil";
// exportaciones amplify

import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Amplify, API } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import * as Constants from "expo-constants";
import { api } from "@/utils/constants/api.jsx";
const ENDPOINT =
  Constants?.AppOwnership?.Expo === ""
    ? api?.stage_endpoint?.dev
    : api?.stage_endpoint?.prod;
console.log("ENDPOINT: ", ENDPOINT);
Amplify.configure({
  ...awsconfig,
  API: {
    endpoints: [
      {
        name: "apibybus",
        endpoint: ENDPOINT,
      },
    ],
  },
});

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    thin: require("@/utils/fonts/Montserrat-Thin.ttf"),
    regular: require("@/utils/fonts/Montserrat-Regular.ttf"),
    light: require("@/utils/fonts/Montserrat-Light.ttf"),
    bold: require("@/utils/fonts/Montserrat-Bold.ttf"),
    extralight: require("@/utils/fonts/Montserrat-ExtraLight.ttf"),
    medium: require("@/utils/fonts/Montserrat-Medium.ttf"),
    black: require("@/utils/fonts/Montserrat-Black.ttf"),
    semibold: require("@/utils/fonts/Montserrat-SemiBold.ttf"),
    thinItalic: require("@/utils/fonts/Montserrat-ThinItalic.ttf"),
    mediumItalic: require("@/utils/fonts/Montserrat-MediumItalic.ttf"),
    lightItalic: require("@/utils/fonts/Montserrat-LightItalic.ttf"),
    boldItalic: require("@/utils/fonts/Montserrat-BoldItalic.ttf"),
    notoRegular: require("@/utils/fonts/NotoSerif-Regular.ttf"),
    notoBold: require("@/utils/fonts/NotoSerif-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  console.log(Platform.OS);

  if (Platform.OS === "android") {
    return (
      <SafeAreaProvider
        onLayout={onLayoutRootView}
        initialMetrics={initialWindowMetrics}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RecoilRoot>
            <BottomSheetModalProvider>
              <Navigation />
            </BottomSheetModalProvider>
          </RecoilRoot>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    );
  } else if (Platform.OS === "ios") {
    return (
      <SafeAreaProvider
        onLayout={onLayoutRootView}
        initialMetrics={initialWindowMetrics}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RecoilRoot>
            <BottomSheetModalProvider>
              <StatusBar style="light" />
              <Navigation />
            </BottomSheetModalProvider>
          </RecoilRoot>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    );
  }
}
