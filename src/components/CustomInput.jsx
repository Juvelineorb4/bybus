import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
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
  placeholderTextColor = {},
  editable = true,
}) => {
  const [securityChange, setSecurityChange] = useState(true)
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
          <View style={[styled.input, error && { borderColor: "red", borderWidth: 1, marginBottom: 0 }]}>
          {icon && (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={icon}
                />
              )}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              {...styled.placeholder}
              style={styled.text}
              secureTextEntry={security && securityChange}
              defaultValue={defaultValue}
              editable={editable}
            />
            {/* si es de seguridad por defecto se colcoa el ojito */}
            {security
              ? iconRight && (
                  <TouchableOpacity
                    onPress={() => setSecurityChange(!securityChange)}
                  >
                    {
                      securityChange ? <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: "contain",
                      }}
                      source={require("@/utils/images/eye_yes.png")}
                    /> : <Image
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                    }}
                    source={require("@/utils/images/eye_no.png")}
                  />
                    }
                  </TouchableOpacity>
                )
              : iconRight && (
                  <Icon
                    name={iconRight.name}
                    color={iconRight.color}
                    size={iconRight.size}
                    type={iconRight.type}
                  />
                )}
          </View>
          {error && <Text style={{ color: "red" }}>{error.message || "Error"}</Text>}
        </>
      )}
    />
  );
};

export default CustomInput;
