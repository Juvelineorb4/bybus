import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { tickets } from "@/utils/constants/tickets";
import styles from "@/utils/styles/Tickets.module.css";
import { CustomButton, Ticket as TicketComponent } from "@/components";
import ActiveTickets from "@/components/ActiveTickets";
import PreviousTickets from "@/components/PreviousTickets";

const Tickets = ({ navigation }) => {
  const global = require('@/utils/styles/global.js');
  const { routes } = tickets;
  const [active, setActive] = useState(true);
  const onHandlePress = () => {
    setActive(!active);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        {/* <Image
          style={{
            width: "100%",
            height: 100,
            position: "absolute",
            borderBottomLeftRadius: 16,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        /> */}
        <View style={[styles.text, {
          width: "100%",
          height: 100,
          // position: "absolute",
          borderBottomLeftRadius: 16,
          // resizeMode: "cover",
        }, global.mainBgColorSecond]}>
          <Text style={styles.title}>Mis ordenes</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* <CustomButton
          text={`Buy Ticket`}
          handlePress={() => navigation.navigate(routes.choose)}
          textStyles={styles.textButton}
          buttonStyles={styles.button}
        /> */}
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={onHandlePress}
            style={[
              styles.active,
              { backgroundColor: active ? "#0077B6" : "#fafafa" },
            ]}
          >
            <Text style={[styles.textActive, active ? global.white : global.black]}>Activos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onHandlePress}
            style={[
              styles.previous,
              { backgroundColor: active ? "#fafafa" : "#0077B6" },
            ]}
          >
            <Text style={[styles.textPrevious, active ? global.black : global.white]}>Anteriores</Text>
          </TouchableOpacity>
        </View>
        {active ? <ActiveTickets /> : <PreviousTickets/>  }
        

        {/* <TicketComponent /> */}
      </View>
    </View>
  );
};

export default Tickets;
