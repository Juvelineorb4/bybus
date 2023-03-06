import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import { settings } from "@/utils/constants/settings";
import styles from "@/utils/styles/Settings.module.css";
import CustomSelect from "@/components/CustomSelect";

const Settings = ({ navigation }) => {
  const global = require('@/utils/styles/global.js');
  const { buttons } = settings;
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
                  iconLeft: [styles.iconLeft, global.bgBlack],
                  iconRight: styles.iconRight,
                }}
                icon={button.icon}
                toogle={button.toogle}
              />
            </TouchableOpacity>
          ) : (
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
                  iconLeft: [styles.iconLeft, global.bgBlack],
                  iconRight: styles.iconRight,
                }}
                icon={button.icon}
                toogle={button.toogle}
              />
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default Settings;