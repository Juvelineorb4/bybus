import { Text, View, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import Icon from "./Icon";


const CustomInput = ({
  defaultValue,
  control,
  name,
  rules = {},
  placeholder,
  security,
  styled = {},
  icon = {},
  text,
  iconRight = {},
  placeholderTextColor = {}
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
          {text && <Text style={styled.label}>{text}</Text>}
          <View style={[styled.input, error && { borderColor: "red" }]}>
            {icon && <Icon name={icon.name} color={icon.color} size={icon.size} />}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              {...styled.placeholder}
              style={styled.text}
              secureTextEntry={security}
              defaultValue={defaultValue}
            />
            {iconRight && <Icon name={iconRight.name} color={iconRight.color} size={iconRight.size} />}
          </View>
          {error && <Text style={styled.error}>{error.message || "Error"}</Text>}
        </>
      )}
    />
  );
};

export default CustomInput;
