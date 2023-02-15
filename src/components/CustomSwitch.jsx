import {
  calendarPermissions,
  cameraPermissions,
  contactPermissions,
  locationPermissions,
  notificationPermissions,
  statsPermissions,
} from "@/atoms/Modals";
import React, { useEffect } from "react";
import { View, Switch } from "react-native";
import { useRecoilState } from "recoil";

const CustomSwitch = ({ styled, colors, global }) => {
  const [notificationsPermission, setNotificationsPermission] = useRecoilState(
    notificationPermissions
  );
  const [statsPermission, setStatsPermission] =
    useRecoilState(statsPermissions);
  const [locationPermission, setLocationPermission] =
    useRecoilState(locationPermissions);
  const [contactPermission, setContactPermission] =
    useRecoilState(contactPermissions);
  const [calendarPermission, setCalendarPermission] =
    useRecoilState(calendarPermissions);
  const [cameraPermission, setCameraPermission] =
    useRecoilState(cameraPermissions);

  const checkNotificationsPermissions = async () => {
    try {
      setNotificationsPermission(notificationsPermission);
      setStatsPermission(statsPermission);
      setLocationPermission(locationPermission);
      setContactPermission(contactPermission);
      setCalendarPermission(calendarPermission);
      setCameraPermission(cameraPermission);
    } catch (error) {
      setNotificationsPermission(null);
      setStatsPermission(null);
      setLocationPermission(null);
      setContactPermission(null);
      setCalendarPermission(null);
      setCameraPermission(null);
    }
  };
  const updateNotificationsPermission = () => {
    setNotificationsPermission(!notificationsPermission);
  };
  const updateStatsPermission = () => {
    setStatsPermission(!statsPermission);
  };
  const updateLocationPermission = () => {
    setLocationPermission(!locationPermission);
  };
  const updateContactPermission = () => {
    setContactPermission(!contactPermission);
  };
  const updateCalendarPermission = () => {
    setCalendarPermission(!calendarPermission);
  };
  const updateCameraPermission = () => {
    setCameraPermission(!cameraPermission);
  };

  useEffect(() => {
    checkNotificationsPermissions();
  }, []);
  return (
    <View style={[styled, { flexDirection: "row" }]}>
      {global === "notifications" ? (
        <Switch
          trackColor={{
            false: colors.track.false,
            true: colors.track.true,
          }}
          thumbColor={
            notificationsPermission ? colors.thumb.true : colors.thumb.false
          }
          onValueChange={updateNotificationsPermission}
          value={notificationsPermission}
        />
      ) : global === "stats" ? (
        <Switch
          trackColor={{
            false: colors.track.false,
            true: colors.track.true,
          }}
          thumbColor={statsPermission ? colors.thumb.true : colors.thumb.false}
          onValueChange={updateStatsPermission}
          value={statsPermission}
        />
      ) : global === "location" ? (
        <Switch
          trackColor={{
            false: colors.track.false,
            true: colors.track.true,
          }}
          thumbColor={
            locationPermission ? colors.thumb.true : colors.thumb.false
          }
          onValueChange={updateLocationPermission}
          value={locationPermission}
        />
      ) : global === "contact" ? (
        <Switch
          trackColor={{
            false: colors.track.false,
            true: colors.track.true,
          }}
          thumbColor={
            contactPermission ? colors.thumb.true : colors.thumb.false
          }
          onValueChange={updateContactPermission}
          value={contactPermission}
        />
      ) : global === "calendar" ? (
        <Switch
          trackColor={{
            false: colors.track.false,
            true: colors.track.true,
          }}
          thumbColor={
            calendarPermission ? colors.thumb.true : colors.thumb.false
          }
          onValueChange={updateCalendarPermission}
          value={calendarPermission}
        />
      ) : (
        <Switch
          trackColor={{
            false: colors.track.false,
            true: colors.track.true,
          }}
          thumbColor={cameraPermission ? colors.thumb.true : colors.thumb.false}
          onValueChange={updateCameraPermission}
          value={cameraPermission}
        />
      )}
    </View>
  );
};

export default CustomSwitch;
