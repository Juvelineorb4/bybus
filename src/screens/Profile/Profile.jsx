import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/Profile.module.css";
import { CustomButton, Icon } from "@/components";
import * as Clipboard from "expo-clipboard";
import CustomText from "@/components/CustomText";
import CustomDropDown from "@/components/CustomDropDown";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import CustomTravelCard from "@/components/CustomTravelCard";

const Profile = ({ navigation }) => {
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

  const items = [
    { label: "Latest", value: "latest" },
    { label: "Newest", value: "newest" },
  ];
  return (
    <ScrollView style={styles.container}>
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
            <View style={styles.image}></View>
            <CustomButton
              handlePress={() => navigation.navigate("EditProfile")}
              buttonStyles={styles.edit}
              icon={{
                status: true,
                name: "image-edit-outline",
                size: 20,
                color: "#ffffff",
              }}
            />
          </View>
          <Text style={styles.user}>Chrisesbueno</Text>
          <TouchableOpacity style={styles.idUser} onPress={copyToClipboard}>
            <View style={styles.icon}>
              <Icon name={"clipboard-outline"} size={15} color={`#1F1F1F`} />
            </View>
            <Text style={styles.id}>#0000001</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.textCard}>
            <CustomText
              styled={{
                title: styles.titleTravel,
                subtitle: styles.subtitleTravel,
                container: styles.containerTravel,
              }}
              title="Your balance"
              subtitle="Add your travel card so it can be used to pay for your tickets."
            />
            <CustomButton
              text={`00.00$`}
              handlePress={() => navigation.navigate("PaymentView")}
              textStyles={styles.balanceText}
              buttonStyles={styles.balance}
            />
          </View>
        </View>
        <View style={styles.travels}>
          <View style={styles.textTravels}>
            <CustomText
              styled={{
                title: styles.titleTravel,
                subtitle: styles.subtitleTravel,
                container: styles.containerTravel,
              }}
              title="Journeys you follow"
              subtitle="Get notified of changes with your route."
            />
            <CustomDropDown
              list={items}
              styled={{
                container: styles.picker,
                item: styles.pickerItem,
              }}
            />
          </View>
          <ScrollView horizontal>
            <CustomTravelCard />
            <CustomTravelCard />
            <CustomTravelCard />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
