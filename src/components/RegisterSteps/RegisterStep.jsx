import { View, Text, ScrollView } from "react-native";
import React from "react";
import StepOne from "./StepOne";
import CustomText from "../CustomText";

const RegisterStep = () => {
  return (
    <ScrollView>
      <View>
        {step.id === "one" ? (
          <View>
            <CustomText styled={{ title: step.styles.title, subtitle: step.styles.subtitle }}
              title={step.title}
              subtitle={step.subtitle} />
            <StepOne />
          </View>
        ) : step.id === "two" ? (
            <View>
            <CustomText styled={{ title: step.styles.title, subtitle: step.styles.subtitle }}
              title={step.title}
              subtitle={step.subtitle} />
            <StepTwo />
          </View>
        ) : step.id === "three" ? (
            <View>
            <CustomText styled={{ title: step.styles.title, subtitle: step.styles.subtitle }}
              title={step.title}
              subtitle={step.subtitle} />
            <StepThree />
          </View>
        ) : (
            <View>
            <CustomText styled={{ title: step.styles.title, subtitle: step.styles.subtitle }}
              title={step.title}
              subtitle={step.subtitle} />
            <StepFour />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default RegisterStep;
