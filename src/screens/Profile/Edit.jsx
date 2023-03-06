import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Edit.module.css";
import { CustomButton, CustomInput, Icon } from "@/components";
import CustomImageSelect from "@/components/CustomImageSelect";
import { set, useForm } from "react-hook-form";

// Recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { userAuthenticated } from '@/atoms/Modals'

import { Auth } from 'aws-amplify'
// hooks
import useImageSelect from '@/hooks/useImageSelect'

const Edit = () => {
  const global = require('@/utils/styles/global.js');
  const { uploadImage, downloadImage } = useImageSelect();
  const [imageUri, setImageUri] = useState(undefined)
  const [enabledButton, setEnabledButton] = useState(true)
  const [userAuth, setUserAuth] = useRecoilState(userAuthenticated);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: userAuth?.attributes.name,
      email: userAuth?.attributes.email
    }
  });

  const name = watch("name")



  const onHandleUpdateProfile = async (data) => {
    const { name } = data;
    setEnabledButton(true)
    try {
      Auth.currentAuthenticatedUser();
      if (imageUri) {
        const key = await uploadImage("profile.jpg", imageUri);
        if (name) {
          await Auth.updateUserAttributes(userAuth, {
            profile: key,
            name
          });
        } else {
          await Auth.updateUserAttributes(userAuth, {
            profile: key,
          });
        }
      } else {
        await Auth.updateUserAttributes(userAuth, {
          name
        });
      }
      setImageUri(undefined)
    } catch (error) {
      console.error(error);
      setEnabledButton(false)
    }
  }

  const onHandleButton = () => {
    if (imageUri || (userAuth.attributes.name !== name)) {
      return setEnabledButton(false)
    } else {
      return setEnabledButton(true)
    }
  }

  useEffect(() => {
    onHandleButton()
  }, [name, imageUri])


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.editImage}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            resizeMode: "cover",
          }}
          source={require("@/utils/images/background-profile.png")}
        />
        <View style={styles.containerImage}>
          <CustomImageSelect
            styled={{
              container: styles.imageContent,
              image: styles.image,
              buttons: styles.buttons,
              text: styles.textCamera,
              camera: [styles.camera, global.bgBlack],
            }}
            uriSelect={setImageUri}
          />
          <Text style={[styles.editTitle, global.black]}>Edit your profile below</Text>
        </View>
      </View>
      <View style={styles.editInput}>
        <CustomInput
          control={control}
          name={`name`}
          styled={{
            text: styles.textInput,
            label: [styles.labelInput, global.topGray],
            error: styles.errorInput,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          text={`Full Name`}
          icon={{
            name: "account-circle-outline",
            color: "#404040",
            size: 25,
          }}
        />
        <CustomInput
          control={control}
          name={`email`}
          styled={{
            text: styles.textInput,
            label: [styles.labelInput, global.topGray],
            error: styles.errorInput,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          text={`Email`}
          icon={{
            name: "account-circle-outline",
            color: "#404040",
            size: 25,
          }}
          editable={false}
        />


        <CustomButton
          text={`Update Perfil`}
          handlePress={handleSubmit(onHandleUpdateProfile)}
          textStyles={styles.textButton}
          buttonStyles={styles.Button}
          disabled={enabledButton}
        />
      </View>
    </ScrollView>
  );
};

export default Edit;
