import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@/components";

const RightHeader = ({styled = {}}) => {
  const navigation = useNavigation();
  return (
    <View style={styled}>
      <Icon
        name="bell-outline"
        size={30}
        color="black"
        handlePress={() => navigation.navigate("Notifications")}
      />
      <Icon
        name="account-circle"
        size={30}
        color="black"
        handlePress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default RightHeader;
