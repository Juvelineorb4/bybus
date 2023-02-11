import React, { useState } from "react";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "./CustomButton";

const CustomImageSelect = ({ styled = {}, button }) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styled.container}>
      {image ? (
        <View style={styled.image}>
          <Image
            source={{ uri: image }}
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
              borderRadius: 250,
            }}
          />
        </View>
      ) : (
        <View style={styled.image}>
          <Image
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/image-default.png")}
            onPress={pickImage}
          />
        </View>
      )}
      <View style={styled.buttons}>
        <CustomButton
          icon={{
            status: true,
            name: "camera-outline",
            color: "white",
            size: 24,
          }}
          handlePress={pickImage}
          textStyles={styled.text}
          buttonStyles={styled.camera}
        />
        {button && (
          <CustomButton
            text="Select Image"
            handlePress={pickImage}
            textStyles={styled.btnText}
            buttonStyles={styled.btnBg}
          />
        )}
      </View>
    </View>
  );
};

export default CustomImageSelect;
