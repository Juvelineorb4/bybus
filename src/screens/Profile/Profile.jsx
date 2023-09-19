import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "@/utils/styles/Profile.module.css";
import { CustomButton, Icon } from "@/components";
import * as Clipboard from "expo-clipboard";
import CustomText from "@/components/CustomText";
import CustomDropDown from "@/components/CustomDropDown";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import CustomTravelCard from "@/components/CustomTravelCard";
// Reocil
import { useRecoilValue } from 'recoil'
import { userAuthenticated, imageProfile } from '@/atoms/Modals'
const Profile = ({ navigation }) => {
  const global = require('@/utils/styles/global.js');
  const userAuth = useRecoilValue(userAuthenticated);
  const imgProfile = useRecoilValue(imageProfile)

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
                  resizeMode: "cover"
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
          <Text style={[styles.user, global.black]}>{userAuth && userAuth.attributes?.name}</Text>
          <TouchableOpacity style={[styles.idUser, global.bgBlack]} onPress={copyToClipboard}>
            <View style={[styles.icon, global.mainBgColor]}>
              <Icon name={"clipboard-outline"} size={15} color={`#1F1F1F`} />
            </View>
            <Text style={[styles.id, global.white]}>#0000001</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.textCard}>
            <CustomText
              styled={{
                title: [styles.titleTravel, global.black],
                subtitle: [styles.subtitleTravel, global.topGray],
                container: styles.containerTravel,
              }}
              title="Tu balance"
              subtitle="Agrega tu tarjeta como metodo de pago preferencial."
            />
            <CustomButton
              text={`00.00$`}
              handlePress={() => navigation.navigate("PaymentView")}
              textStyles={[styles.balanceText, global.black]}
              buttonStyles={[styles.balance, global.bgWhite]}
            />
          </View>
        </View>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.travels}>
          <View style={styles.textTravels}>
            <CustomText
              styled={{
                title: [styles.titleTravel, global.black],
                subtitle: [styles.subtitleTravel, global.topGray],
                container: styles.containerTravel,
              }}
              title="Tus viajes activos"
              subtitle="Recibiras notificaciones de tu viaje."
            />
            <CustomDropDown
              list={items}
              styled={{
                container: styles.picker,
                item: [styles.pickerItem, global.black],
              }}
              global={`plan`}
            />
          </View>
          <View style={{ paddingTop: 15 }}>
            <ScrollView horizontal>
              <CustomTravelCard />
              <CustomTravelCard />
              <CustomTravelCard />
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
