import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const CustomInput = ({
  defaultValue,
  control,
  name,
  rules = {},
  placeholder,
  security,
  styled = {},
  icon,
  text,
  iconRight = {},
  placeholderTextColor = {},
  area = false,
  lines = 1,
  errorPost = false,
}) => {
  const [securityChange, setSecurityChange] = useState(true);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          {text && <Text style={styled.label}>{text}</Text>}
          <View
            style={[
              styled.input,
              (error || errorPost) && { borderColor: "red", borderWidth: 0.5 },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
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
                style={value ? styled.text : styled.placeholder}
                secureTextEntry={security && securityChange}
                defaultValue={defaultValue}
                multiline={area ? true : false}
                numberOfLines={lines}
              />
            </View>

            {security
              && iconRight && (
                  <TouchableOpacity
                    onPress={() => setSecurityChange(!securityChange)}
                    style={styled.security}
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
              }
          </View>
          {error && (
            <Text style={styled.error}>{error.message || "Requerido"}</Text>
          )}
          {errorPost && (
            <Text
              style={{
                color: "red",
                position: "absolute",
                right: 10,
                bottom: -5,
                fontFamily: "medium",
                fontSize: 10,
                textTransform: "capitalize",
              }}
            >
              Requerido
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomInput;
