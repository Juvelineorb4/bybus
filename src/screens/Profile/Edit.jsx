import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Edit.module.css";
import { CustomButton, CustomInput, Icon } from "@/components";
import CustomImageSelect from "@/components/CustomImageSelect";
import { useForm } from "react-hook-form";

const Edit = () => {
  const { control, handleSubmit } = useForm();

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
              camera: styles.camera,
            }}
          />
          <Text style={styles.editTitlte}>Edit your profile below</Text>
        </View>
      </View>
      <View style={styles.editInput}>
        <CustomInput
          control={control}
          name={`username`}
          defaultValue={'Chrisesbueno'}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Username`}
          icon={{
            name: "account-circle-outline",
            color: "#404040",
            size: 25,
          }}
        />
        <CustomInput
          control={control}
          name={`fullName`}
          defaultValue={'Christopher Alvarez'}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
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
          defaultValue={'alvarezchristopherve@gmail.com'}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: styles.inputContainer,
          }}
          text={`Email`}
          icon={{
            name: "account-circle-outline",
            color: "#404040",
            size: 25,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Edit;
