import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Platform } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs/Tabs";
import { routing } from "@/utils/constants";
import WelcomeNavigator from "./Welcome/WelcomeNavigator";

// amplify
import { Auth, Hub } from 'aws-amplify';

// recoil
import { userAuthenticated, tokenNotification, imageProfile } from '@/atoms/Modals';
import { useRecoilState } from 'recoil';

// graphql
import { API } from 'aws-amplify';
import * as mutations from '@/graphql/mutations';
// Hooks Custom
import usePushNotification from '@/hooks/usePushNotification'
import useImageSelect from '@/hooks/useImageSelect'

const Navigation = () => {
  const expoPushToken = usePushNotification();
  const { downloadImage } = useImageSelect()
  const [userAuth, setUserAuth] = useRecoilState(userAuthenticated);
  const [token, setToken] = useRecoilState(tokenNotification)
  const [imgProfile, setImgPorfile] = useRecoilState(imageProfile)
  const { main } = routing;
  const Stack = createNativeStackNavigator();


  useEffect(() => {
    setToken(expoPushToken)
  }, [expoPushToken])

  //para esuchar que esta succdiendo con auth 
  useEffect(() => {
    // crear subscripcion
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("HUB: ", event)
      switch (event) {
        case "signIn":
          checkUser();
          break;
        case "signOut":
          setUserAuth(undefined);
          break;
        case "confirmSignUp":
          console.log(data)
          break;
        case "autoSignIn":
          // createWallet(data)
          break;
        case "updateUserAttributes":
          checkUser();
          break;
      }
    });
    // Preguntar si el usuario existe 
    checkUser();
    return unsubscribe;
  }, [])

  const checkUser = async () => {
    try {
      const result = await Auth.currentAuthenticatedUser();
      setUserAuth(result);
      const url = await downloadImage(result.attributes.profile);
      setImgPorfile(url);
    } catch (error) {
      console.error("Not signed in");
      setUserAuth(undefined);
    }
  }

  // const createWallet = async (data) => {
  //   const { attributes } = data
  //   try {
  //     const result = await API.graphql({
  //       query: mutations.createWalletUser,
  //       authMode: "AMAZON_COGNITO_USER_POOLS",
  //       variables: {
  //         input: {
  //           userID: attributes.sub,
  //           email: attributes.email,
  //           notificationToken: {
  //             type: Platform.OS === "android" ? "ANDROID" : "IOS",
  //             token: attributes["custom:notificationToken"]
  //           },
  //         },
  //       },
  //     })
  //     console.log("Wallet: ", result)
  //     const result2 = await Auth.updateUserAttributes(data, {
  //       'custom:walletStatus': result.data.createWalletUser.userID
  //     });

  //     console.log("Wallet2: ", result2)
  //   } catch (error) {
  //     console.error("Wallet Error: ", error)
  //   }

  // }


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={!userAuth ? main.WELCOME : main.HOME}
      >

        {/* si el usuario existe no se le crean las rutas de acceso al Welcome */}
        {
          !userAuth &&
          <Stack.Screen
            name={main.WELCOME}
            component={WelcomeNavigator}
            options={{
              headerShown: false,
            }}
          />
        }
        <Stack.Screen
          name={main.HOME}
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
