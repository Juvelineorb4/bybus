import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { useRecoilState } from "recoil";
import { searchPlan } from "@/atoms/Modals";

const CustomDropDown = ({ list, styled = {} }) => {
  const [value, setValue] = useState("newest");
  const [searchPlanValue, setSearchPlanValue] = useRecoilState(searchPlan);

  const checkSearchPlanValue = async () => {
    try {
      setSearchPlanValue(value);
    } catch (error) {
      setSearchPlanValue(null);
    }
  };
  useEffect(() => {
    checkSearchPlanValue();
  }, []);

  return (
    <View style={styled.container}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => {
          setValue(itemValue);
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
            fontFamily={'Regular'}
          />
        ))}
      </Picker>
    </View>
  );
};

export default CustomDropDown;
