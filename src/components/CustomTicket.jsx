import { View, Text, Image, Share, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import QRCode from "react-native-qrcode-svg";
import styles from "@/utils/styles/CustomTicket.module.css";
import CustomCountDown from "./CustomCountDown";
import ViewShot, { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

const CustomTicket = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const [file, setFile] = useState(null);
  const ref = useRef();
  const messageText = 'Gracias por comprar tu boleto con ByBus. Visita nuestra pagina web para mas informacion: bybusvenezuela.com';
  const options = {
     mimeType: 'image/jpeg',
     dialogTitle: messageText,
  };

  useEffect(() => {
    ref.current.capture().then((uri) => {
      setFile(uri);
    });
  }, []);
  const onShare = async () => {
    try {
      Sharing.shareAsync(file, options);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <ViewShot
      ref={ref}
      options={{ fileName: "shared", format: "jpg", quality: 0.9 }}
    >
      <View style={[styles.container, global.bgWhiteSoftTwo]}>
        <View style={styles.ticketContent}>
          <View style={styles.topContent}>
            <Text style={[styles.textHour, global.black]}>
              {data.data.departure.time.slice(0, 5)}
            </Text>
            <View style={styles.nameTicket}>
              <Text style={[styles.nameTitle, global.black]}>A nombre de:</Text>

              <Text style={[styles.name, global.black]}>
                {data.customer.name}
              </Text>
            </View>
          </View>
          <View style={styles.topTwoContent}>
            <View style={styles.departure}>
              <Text style={[styles.states, global.midGray]}>
                {data.data.departure.state}
              </Text>
              <Text style={[styles.city, global.topGray]}>
                {data.data.departure.city}
              </Text>
            </View>
            <Text style={[styles.to, global.topGray]}>Hasta</Text>
            <View style={styles.destination}>
              <Text style={[styles.states, global.midGray]}>
                {data.data.arrival.state}
              </Text>
              <Text style={[styles.city, global.topGray]}>
                {data.data.arrival.city}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.qrContent}>
          <QRCode
            value={data.ticket}
            color={"#1f1f1f"}
            backgroundColor={"#F1F1F1"}
            size={250}
          />
        </View>
        <TouchableOpacity
          style={[styles.tagTransport, global.mainBgColor]}
          onPress={onShare}
        >
          <Text style={[styles.codeTransporte, global.white]}>Compartir</Text>
        </TouchableOpacity>
        <View style={styles.tags}>
          <View style={styles.wifi}>
            <Text style={[styles.tagText, global.black]}>
              Su orden de transaccion: {data.payment}
            </Text>
          </View>
          <View style={styles.guarantees}>
            <Text style={[styles.tagText, global.black]}>
              Su orden de viaje: {data.order}
            </Text>
          </View>
        </View>
      </View>
    </ViewShot>
  );
};

export default CustomTicket;
