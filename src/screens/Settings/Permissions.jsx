import { Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Permissions.module.css";
import CustomText from "@/components/CustomText";
import { permissions } from "@/utils/constants/permissions";
import CustomSelect from "@/components/CustomSelect";
import { ScrollView } from "react-native-gesture-handler";

const Permissions = () => {
  const { permits } = permissions;

  return (
    <ScrollView style={styles.container}>
      <CustomText
        title={`Permits`}
        subtitle={`We collect data in the app to make your journey as smooth as possible.`}
        styled={{
          title: styles.title,
          subtitle: styles.subtitle,
          container: styles.textContainer,
        }}
      />
      {permits.map((item, index) => (
        <View key={index}>
          <View style={styles.line} />
          <CustomSelect
            title={item.title}
            subtitle={item.subtitle}
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
            toogle={item.toogle}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Permissions;
