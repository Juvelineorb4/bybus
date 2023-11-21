import { StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
const CustomCheckBox = ({
  control,
  rules = {},
  text = "",
  name,
  onPressed,
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Checkbox
              style={{ margin: 8 }}
              value={value}
              onValueChange={onChange}
              color={value ? "blue" : undefined}
            />
            <Text style={{ marginRight: 5 }}>{text}</Text>
            {onPressed && (
              <Feather
                name="external-link"
                size={20}
                color="blue"
                onPress={onPressed}
              />
            )}
          </View>
          {error && (
            <Text style={{ color: "red" }}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({});
