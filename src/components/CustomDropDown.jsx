import React, { useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { useRecoilState } from "recoil";
import {
  searchNotification,
  searchPlan,
  searchTicketPlan,
} from "@/atoms/Modals";

const CustomDropDown = ({ list, styled = {}, global }) => {
  const [searchPlanValue, setSearchPlanValue] = useRecoilState(searchPlan);
  const [searchNotificationsValue, setSearchNotificationsValue] =
    useRecoilState(searchNotification);
  const [searchTicketPlanValue, setSearchTicketPlanValue] =
    useRecoilState(searchTicketPlan);

  const checkSearchPlanValue = async () => {
    try {
      setSearchPlanValue(searchPlanValue);
      setSearchNotificationsValue(searchNotificationsValue);
      setSearchTicketPlanValue(searchTicketPlanValue);
    } catch (error) {
      setSearchPlanValue(null);
      setSearchNotificationsValue(null);
      setSearchTicketPlanValue(null);
    }
  };
  useEffect(() => {
    checkSearchPlanValue();
  }, []);

  return (
    <View style={styled.container}>
      {global === "plan" ? (
        <Picker
          selectedValue={searchPlanValue}
          onValueChange={(itemValue) => {
            setSearchPlanValue(itemValue);
          }}
          mode={"dropdown"}
        >
          {list.map((item, index) => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={index}
              style={styled.item}
              fontFamily={"Regular"}
            />
          ))}
        </Picker>
      ) : global === "ticket-plan" ? (
        <Picker
          selectedValue={searchTicketPlanValue}
          onValueChange={(itemValue) => {
            setSearchTicketPlanValue(itemValue);
          }}
          mode={"dropdown"}
        >
          {list.map((item, index) => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={index}
              style={styled.item}
              fontFamily={"Regular"}
            />
          ))}
        </Picker>
      ) : (
        <Picker
          selectedValue={searchNotificationsValue}
          onValueChange={(itemValue) => {
            setSearchNotificationsValue(itemValue);
          }}
          mode={"dropdown"}
        >
          {list.map((item, index) => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={index}
              style={styled.item}
              fontFamily={"Regular"}
            />
          ))}
        </Picker>
      )}
    </View>
  );
};

export default CustomDropDown;
