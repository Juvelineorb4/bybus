import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import { settings } from "@/utils/constants/settings";
import styles from "@/utils/styles/Settings.module.css";
import CustomSelect from "@/components/CustomSelect";
import { Auth } from 'aws-amplify';
// import { ScrollView } from "react-native-gesture-handler";
import { userAuthenticated } from '@/atoms/Modals';
import { useRecoilValue } from 'recoil';
const Settings = ({ navigation }) => {
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {buttons.map((button, index) => (
        <View key={index}>
          {button.route ? (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(button.route)}>
              <View style={styles.line} />
              <CustomSelect
                title={button.title}
                subtitle={button.subtitle}
                styled={{
                  text: {
                    container: styles.textContainerSelect,
                    title: styles.textTitleSelect,
                    subtitle: styles.textSubtitleSelect,
                  },
                  container: styles.containerSelect,
                  iconLeft: styles.iconLeft,
                  iconRight: styles.iconRight,
                }}
                icon={button.icon}
                toogle={button.toogle}
              />
            </TouchableOpacity>
          ) : button.toogle ? (
            <View>
              <View style={styles.line} />
              <CustomSelect
                title={button.title}
                subtitle={button.subtitle}
                styled={{
                  text: {
                    container: styles.textContainerSelect,
                    title: styles.textTitleSelect,
                    subtitle: styles.textSubtitleSelect,
                  },
                  container: styles.containerSelect,
                  iconLeft: styles.iconLeft,
                  iconRight: styles.iconRight,
                }}
                icon={button.icon}
                toogle={button.toogle}
              />
            </View>
          ) : (userAuth && button.logout) ?
            <>
              <TouchableOpacity onPress={signOut}>
                <View style={styles.line} />
                <CustomSelect
                  title={button.title}
                  subtitle={button.subtitle}
                  styled={{
                    text: {
                      container: styles.textContainerSelect,
                      title: styles.textTitleSelect,
                      subtitle: styles.textSubtitleSelect,
                    },
                    container: styles.containerSelect,
                    iconLeft: styles.iconLeft,
                    iconRight: styles.iconRight,
                  }}
                  icon={button.icon}
                  toogle={button.toogle}
                />
              </TouchableOpacity>
            </>
            : (!userAuth && button.login) &&
            <TouchableOpacity onPress={signOut}>
              <View style={styles.line} />
              <CustomSelect
                title={button.title}
                subtitle={button.subtitle}
                styled={{
                  text: {
                    container: styles.textContainerSelect,
                    title: styles.textTitleSelect,
                    subtitle: styles.textSubtitleSelect,
                  },
                  container: styles.containerSelect,
                  iconLeft: styles.iconLeft,
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