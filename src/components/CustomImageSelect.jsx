import React, { useState } from "react";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "./CustomButton";

// recoil
import { useRecoilValue } from 'recoil'
import { imageProfile } from '@/atoms/Modals'

const CustomImageSelect = ({ styled = {}, button, uriSelect }) => {
  const imgProfile = useRecoilValue(imageProfile)
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    ImagePicker.getPendingResultAsync
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    if (!result.canceled) {
      const { uri } = result.assets[0]
      uriSelect(uri)
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
              resizeMode: "cover",
              borderRadius: 250,
            }}
          />
        </View>
      ) : imgProfile ? (
        <View style={styled.image}>
          <Image
            source={{ uri: imgProfile }}
            style={{
              width: 250,
              height: 250,
              resizeMode: "cover",
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
              resizeMode: "cover",
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
