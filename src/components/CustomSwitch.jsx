import { notificationPermissions } from "@/atoms/Modals";
import React, { useEffect, useState } from "react";
import { View, Switch } from "react-native";
import { useRecoilState } from "recoil";

const CustomSwitch = ({ styled, colors }) => {
  const [notificationsPermission, setNotificationsPermission] = useRecoilState(
    notificationPermissions
  );
  const [isEnabled, setIsEnabled] = useState(false);

  const checkNotificationsPermissions = async () => {
    try {
      setNotificationsPermission(isEnabled);
    } catch (error) {
      setNotificationsPermission(null);
    }
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setNotificationsPermission((previousState) => !previousState);
  };

  useEffect(() => {
    checkNotificationsPermissions();
  }, []);
  return (
    <View style={styled}>
      <Switch
        trackColor={{ false: colors.track.false, true: colors.track.true }}
        thumbColor={isEnabled ? colors.thumb.true : colors.thumb.false}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;
