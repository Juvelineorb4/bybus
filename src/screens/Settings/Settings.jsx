import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { settings } from "@/utils/constants/settings";
import styles from "@/utils/styles/Settings.module.css";
import CustomSelect from "@/components/CustomSelect";
import { ScrollView } from "react-native-gesture-handler";

const Settings = ({ navigation }) => {
  const { buttons } = settings;
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
          ) : (
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
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default Settings;
