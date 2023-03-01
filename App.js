import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Navigation from "@/routes/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { RecoilRoot } from "recoil";
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';



// Configuracion de Amplify 
Amplify.configure(awsconfig);
SplashScreen.preventAutoHideAsync();
export default function App() {
  // Aprendiendo como funcionar
  // usePushNotification();


  const [fontsLoaded] = useFonts({
    Italic: require("@/utils/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    Regular: require("@/utils/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RecoilRoot>
          <BottomSheetModalProvider>
            <Navigation />
          </BottomSheetModalProvider>
        </RecoilRoot>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
