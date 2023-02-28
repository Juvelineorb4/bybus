import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { tickets } from "@/utils/constants/tickets";
import styles from "@/utils/styles/ChooseTicket.module.css";
import CustomSelect from "@/components/CustomSelect";
import { CustomButton } from "@/components";

const ChooseTicket = ({ navigation }) => {
  const [active, setActive] = useState("");
  const { routes, buttons } = tickets;
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderBottomLeftRadius: 40,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        />
        <View style={styles.text}>
          <Text style={styles.title}>Choose ticket</Text>
        </View>
      </View>
      <View style={styles.content}>
        {buttons.map((button, index) => (
          <View style={styles.itemTicket} key={index}>
            <CustomSelect
              title={`Single tickets`}
              subtitle={`I just need to go for a ride.`}
              styled={{
                text: {
                  container: styles.textContainerSelect,
                  title: styles.textTitleSelect,
                  subtitle: styles.textSubtitleSelect,
                },
                container: styles.containerSelect,
                iconLeft: styles.iconLeft,
              }}
              icon={button.icon}
            />
            <TouchableOpacity
              style={[
                styles.itemActive,
                {
                  backgroundColor: active === "single" ? "#FF8811" : "#EFEDED",
                },
              ]}
              onPress={() => setActive("single")}
            >
              <View style={styles.itemCircle}></View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.button}>
        <CustomButton
          text={`Continue`}
          handlePress={() => navigation.navigate(routes.create)}
          textStyles={styles.textContinue}
          buttonStyles={styles.continue}
        />
      </View>
    </View>
  );
};

export default ChooseTicket;
