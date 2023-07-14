import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { settings } from "@/utils/constants/settings";
import styles from "@/utils/styles/Settings.module.css";
import CustomSelect from "@/components/CustomSelect";
import { Auth } from "aws-amplify";
import { imageProfile, userAuthenticated } from "@/atoms/Modals";
import { useRecoilValue } from "recoil";
import { CustomButton } from "@/components";
import { useForm } from "react-hook-form";

const Settings = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const userAuth = useRecoilValue(userAuthenticated);
  const { buttons } = settings;
  const imgProfile = useRecoilValue(imageProfile);

  const { control, watch } = useForm();
  const picker = watch(["travels", "value"]);
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("#0000001");
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  const signOut = async () => {
    try {
      await Auth.signOut();

      setTimeout(() => {
        navigation.navigate("Welcome_App");
      }, 200);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const login = () => {
    navigation.navigate("Welcome_App");
  };

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={styles.profile}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        />
        <View style={styles.profileContent}>
          <View style={styles.containerImage}>
            <View style={styles.image}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  resizeMode: "cover",
                }}
                source={{ uri: imgProfile && imgProfile }}
              />
            </View>
            <CustomButton
              handlePress={() => navigation.navigate("EditProfile")}
              buttonStyles={[styles.edit, global.bgBlack]}
              icon={{
                status: true,
                name: "image-edit-outline",
                size: 20,
                color: "#ffffff",
              }}
            />
          </View>
          <Text style={[styles.user, global.black]}>
            {userAuth && userAuth.attributes?.name}
          </Text>
          <TouchableOpacity
            style={[styles.idUser, global.bgBlack]}
            onPress={copyToClipboard}
          >
            <View style={[styles.icon, global.mainBgColor]}>
            <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "cover",
                }}
                source={require('@/utils/images/clipboard.png')}
              />
            </View>
            <Text style={[styles.id, global.white]}>#0000001</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.title, global.black]}>Settings</Text>
      {buttons.map((button, index) => (
        <View key={index}>
          {button.route ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate(button.route)}
            >
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
          ) : userAuth && button.logout ? (
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
          ) : (
            !userAuth &&
            button.login && (
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
            )
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default Settings;
