import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs/Tabs";
import { routing } from "@/utils/constants";
import WelcomeNavigator from "./Welcome/WelcomeNavigator";

// amplify
import { Auth, Hub, API } from "aws-amplify";

// recoil
import {
  userAuthenticated,
  tokenNotification,
  imageProfile,
  planSearch,
  tasaBCV,
} from "@/atoms/Modals";
import { useRecoilState } from "recoil";

// graphql
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/customQueries";
// Hooks Custom
import usePushNotification from "@/hooks/usePushNotification";
import useImageSelect from "@/hooks/useImageSelect";

const Navigation = () => {
  const expoPushToken = usePushNotification();
  const { downloadImage } = useImageSelect();
  const [userAuth, setUserAuth] = useRecoilState(userAuthenticated);
  const [token, setToken] = useRecoilState(tokenNotification);
  const [search, setSearch] = useRecoilState(planSearch);
  const [tasa, setTasa] = useRecoilState(tasaBCV);
  const [imgProfile, setImgPorfile] = useRecoilState(imageProfile);
  const { main } = routing;
  const Stack = createNativeStackNavigator();

  const fetchTasa = async () => {
    const result = await API.graphql({
      query: queries.getTodayTC,
      authMode: "AWS_IAM",
    });
    setTasa(JSON.parse(result.data.getTodayTasaCambio).body.price)
  }
  useEffect(() => {
    fetchTasa()
    setToken(expoPushToken);
  }, [expoPushToken]);

  //para esuchar que esta succdiendo con auth
  useEffect(() => {
    // crear subscripcion
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("HUB: ", event);
      switch (event) {
        case "signIn":
          checkUser();
          break;
        case "signOut":
          setUserAuth(undefined);
          setSearch({
            time: "",
            date: "",
            departureState: "",
            departureCity: "",
            arrivalState: "",
            arrivalCity: "",
            active: false,
          });
          break;
        case "confirmSignUp":
          console.log(data);
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
  }, []);

  const checkUser = async () => {
    try {
      const result = await Auth.currentAuthenticatedUser();
      if (result?.signInUserSession.accessToken.payload["cognito:groups"]) {
        await Auth.signOut();
        Alert.alert("No Autorizado!", `Usuario: ${result?.attributes?.email}, no puede usar ese modulo`)
        console.log("USUARIO NO AUTORIZADO");
        return;
      }
      setUserAuth(result);
      checkAttributes(result);
    } catch (error) {
      console.log("Not signed in");
      setUserAuth(null);
    }
  };

  const checkAttributes = async (data) => {
    const { attributes } = data;
    if (
      !attributes["custom:notificationToken"] ||
      attributes["custom:notificationToken"] === ""
    )
      updateUserData(data);
  };
  const updateUserData = async (data) => {
    try {
      await Auth.updateUserAttributes(data, {
        "custom:notificationToken": token,
      });
    } catch (error) {
      console.log("ERROR AL ACTUALIZAR ATRIBUTO IDENTITY ID: ", error.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!userAuth ? main.WELCOME : main.HOME}>
        {/* si el usuario existe no se le crean las rutas de acceso al Welcome */}
        {!userAuth ? (
          <Stack.Screen
            name={main.WELCOME}
            component={WelcomeNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name={main.HOME}
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
