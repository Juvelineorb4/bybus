import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { tickets } from "@/utils/constants/tickets";
import styles from "@/utils/styles/Tickets.module.css";
import { CustomButton, Ticket as TicketComponent } from "@/components";
import ActiveTickets from "@/components/ActiveTickets";
import PreviousTickets from "@/components/PreviousTickets";

const Tickets = ({ navigation }) => {
  const { routes } = tickets;
  const [active, setActive] = useState(true);
  const onHandlePress = () => {
    setActive(!active);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image
          style={{
            width: "100%",
            height: 100,
            position: "absolute",
            borderBottomLeftRadius: 16,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        />
        <View style={styles.text}>
          <Text style={styles.title}>Mis tickets</Text>
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
              { backgroundColor: active ? "#FF8811" : "#fafafa" },
            ]}
          >
            <Text style={styles.textActive}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onHandlePress}
            style={[
              styles.previous,
              { backgroundColor: active ? "#fafafa" : "#FF8811" },
            ]}
          >
            <Text style={styles.textPrevious}>Previous</Text>
          </TouchableOpacity>
        </View>
        {active ? <ActiveTickets /> : <PreviousTickets/>  }
        

        {/* <TicketComponent /> */}
      </View>
    </View>
  );
};

export default Tickets;
