import { Text, View, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import Icon from "./Icon";


const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  number,
  styled = {},
  icon = {},
  text
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
         <Text style={styled.label}>{text}</Text>
          <View style={[styled.input, error && { borderColor: "red" }]}>
            <Icon name={icon.name} color={icon.color} size={icon.size} />
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              keyboardType={!number ? "default" : "decimal-pad"}
              style={styled.text}
            />
          </View>
          {error && <Text style={styled.error}>{error.message || "Error"}</Text>}
        </>
      )}
    />
  );
};

export default CustomInput;