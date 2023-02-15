import { View, TextInput, Text } from "react-native";
import React, { useRef, useState } from "react";
import styles from "@/utils/styles/EnterCode.module.css";
import CustomText from "./CustomText";

const EnterCode = ({title, subtitle, styled}) => {
  const [oneValue, setOneValue] = useState('')

  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  console.log(oneValue)
  return (
    <View style={styled.container}>
      <View style={styles.inputs}>
        <TextInput
          onChangeText={(number) => {
            number && two.current.focus();
            setOneValue(number)
          }}
          placeholder={`0`}
          keyboardType="number-pad"
          maxLength={1}
          ref={one}
          style={styles.input}
          value={oneValue}
        />
        <TextInput
          onChangeText={(number) => {
            number ? three.current.focus() : one.current.focus();
          }}
          placeholder={`0`}
          keyboardType="number-pad"
          maxLength={1}
          ref={two}
          style={styles.input}
        />
        <TextInput
          onChangeText={(number) => {
            number ? four.current.focus() : two.current.focus();
          }}
          placeholder={`0`}
          keyboardType="number-pad"
          maxLength={1}
          ref={three}
          style={styles.input}
        />
        <TextInput
          onChangeText={(number) => {
            number ? five.current.focus() : three.current.focus();
          }}
          placeholder={`0`}
          keyboardType="number-pad"
          maxLength={1}
          ref={four}
          style={styles.input}
        />
        <TextInput
          onChangeText={(number) => {
            number ? five.current.focus() : four.current.focus();
          }}
          placeholder={`0`}
          keyboardType="number-pad"
          maxLength={1}
          ref={five}
          style={styles.input}
        />
      </View>
      <CustomText title={title} subtitle={subtitle} styled={{
        title: styles.title,
        subtitle: styles.subtitle
      }} />
    </View>
  );
};

export default EnterCode;
