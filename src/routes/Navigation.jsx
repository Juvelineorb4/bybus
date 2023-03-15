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
import { userAuthenticated, tokenNotification, imageProfile, imageUri } from '@/atoms/Modals';
import { useRecoilState, useSetRecoilState } from 'recoil';

// Hooks Custom
import usePushNotification from '@/hooks/usePushNotification'
import useImageSelect from '@/hooks/useImageSelect'

const Navigation = () => {
  const expoPushToken = usePushNotification();
  const { downloadImage, uploadImage } = useImageSelect()
  const [userAuth, setUserAuth] = useRecoilState(userAuthenticated);
  const setToken = useSetRecoilState(tokenNotification)
  const [imgProfile, setImgProfile] = useRecoilState(imageProfile)
  const [imgUri, setImgUri] = useRecoilState(imageUri)
  const [autoSignIn, setAutoSignIn] = useState(false)
  const { main } = routing;
  const Stack = createNativeStackNavigator();


  useEffect(() => {
    setToken(expoPushToken)
  }, [expoPushToken])

  useEffect(() => {
    if (imgUri && userAuth) onHandlerUploadImage(userAuth, imgUri)
  }, [userAuth])


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
          setImgProfile(undefined);
          setUserAuth(undefined);
          break;
        case "confirmSignUp":
          console.log("confirmSignUp: ", data)
          break;
        case "autoSignIn":
          // setUserAuth(data)
          break;
        case "updateUserAttributes":
          checkUser();
          break;
      }
    });
    // Preguntar si el usuario existe 
    console.log("yo por aqui paso siempre")
    console.log(imgUri)
    checkUser();
    return unsubscribe;
  }, [])

  const checkUser = async () => {
    try {
      const result = await Auth.currentAuthenticatedUser();
      setUserAuth(result);
      const url = await downloadImage(result.attributes.picture);
      setImgProfile(url);
    } catch (error) {
      console.error("Not signed in");
      setUserAuth(undefined);
    }
  }


  const onHandlerUploadImage = async (user, uri) => {
    try {
      const key = await uploadImage("picture.jpg", uri);
      setImgUri(undefined)
      await Auth.updateUserAttributes(user, {
        picture: key,
      });
    } catch (error) {
      console.error(error);
    }
  }

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
