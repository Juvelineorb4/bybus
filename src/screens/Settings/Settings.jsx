import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import { settings } from "@/utils/constants/settings";
import styles from "@/utils/styles/Settings.module.css";
import CustomSelect from "@/components/CustomSelect";
import { Auth } from 'aws-amplify';
import { userAuthenticated } from '@/atoms/Modals';
import { useRecoilValue } from 'recoil';


const Settings = ({ navigation }) => {
  const global = require('@/utils/styles/global.js');
  const userAuth = useRecoilValue(userAuthenticated)
  const { buttons } = settings;

  const signOut = async () => {
    try {
      await Auth.signOut();
   
      setTimeout(() => {
        navigation.navigate("Welcome_App")
      }, 200);

    } catch (error) {
      console.log('error signing out: ', error);
    }

  }

  const login = () => {
    navigation.navigate("Welcome_App")
  }

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <Text style={[styles.title, global.black]}>Settings</Text>
      {buttons.map((button, index) => (
        <View key={index}>
          {button.route ? (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(button.route)}>
              <View style={[styles.line, global.bgWhiteSmoke]} />
              <CustomSelect
                title={button.title}
                subtitle={button.subtitle}
                styled={{
                  text: {
                    container: styles.textContainerSelect,
                    title: [styles.textTitleSelect, global.black],
                    subtitle: [styles.textSubtitleSelect, global.topGray],
                  },
                  container: styles.containerSelect,
                  iconLeft: [styles.iconLeft, global.mainBgColorSecond],
                  iconRight: styles.iconRight,
                }}
                icon={button.icon}
                toogle={button.toogle}
              />
            </TouchableOpacity>
          ) : button.toogle ? (
            <View>
              <View style={[styles.line, global.bgWhiteSmoke]} />
              <CustomSelect
                title={button.title}
                subtitle={button.subtitle}
                styled={{
                  text: {
                    container: styles.textContainerSelect,
                    title: [styles.textTitleSelect, global.black],
                    subtitle: [styles.textSubtitleSelect, global.topGray],
                  },
                  container: styles.containerSelect,
                  iconLeft: [styles.iconLeft, global.mainBgColorSecond],
                  iconRight: styles.iconRight,
                }}
                icon={button.icon}
                toogle={button.toogle}
              />
            </View>
          ) : (userAuth && button.logout) ?
            <>
              <TouchableOpacity onPress={signOut}>
                <View style={[styles.line, global.bgWhiteSmoke]} />
                <CustomSelect
                  title={button.title}
                  subtitle={button.subtitle}
                  styled={{
                    text: {
                      container: styles.textContainerSelect,
                      title: [styles.textTitleSelect, global.black],
                      subtitle: [styles.textSubtitleSelect, global.topGray],
                    },
                    container: styles.containerSelect,
                    iconLeft: [styles.iconLeft, global.mainBgColorSecond],
                    iconRight: styles.iconRight,
                  }}
                  icon={button.icon}
                  toogle={button.toogle}
                />
              </TouchableOpacity>
            </>
            : (!userAuth && button.login) &&
            <TouchableOpacity onPress={signOut}>
              <View style={[styles.line, global.bgWhiteSmoke]} />
              <CustomSelect
                title={button.title}
                subtitle={button.subtitle}
                styled={{
                  text: {
                    container: styles.textContainerSelect,
                    title: [styles.textTitleSelect, global.black],
                    subtitle: [styles.textSubtitleSelect, global.topGray],
                  },
                  container: styles.containerSelect,
                  iconLeft: [styles.iconLeft, global.mainBgColorSecond],
                  iconRight: styles.iconRight,
                }}
                icon={button.icon}
                toogle={button.toogle}
              />
            </TouchableOpacity>
          }
        </View>
      ))}
    </ScrollView>
  );
};

export default Settings;