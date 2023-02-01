import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Home")}>ByBus</Text>
      <View style={styles.right}>
        <MaterialCommunityIcons
          name="bell-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Notifications")}
        />
        <MaterialCommunityIcons
          name="account-circle"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
});
