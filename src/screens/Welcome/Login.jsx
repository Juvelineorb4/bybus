import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/Login.module.css";
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";
import CustomText from "@/components/CustomText";
import { Auth } from "aws-amplify";

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const Login = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const global = require("@/utils/styles/global.js");

  const { control, handleSubmit } = useForm();

  const onHandleLogin = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      await Auth.signIn(data.email, data.password);
    } catch (error) {
      switch (error.message) {
        case "User is not confirmed.":
          Alert.alert(
            "Usuario no Confirmado",
            `Usuario: ${data?.email} no confirmado, por favor confirmar`,
            [
              {
                text: "OK",
                onPress: () =>
                  navigation.navigate("Register_App", {
                    screen: "Register_StepFour",
                    params: {
                      registerForm: { email: data?.email, back: true },
                    },
                  }),
              },
            ]
          );

          break;
        case "User does not exist.":
          setError(
            `Usuario: ${data?.email} no registrado por favor registrarse`
          );
          break;
        case "Incorrect username or password.":
          setError(`Correo y/o contraseña incorrectos.`);
          break;
        default:
          setError(`Ocurrio un error intente mas tarde.`);
          break;
      }
    }
    setIsLoading(false);
  };

  return (
    <View style={[styles.container, global.bgWhite]}>
      <ScrollView horizontal={false} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <View style={styles.form}>
            <Image
              style={{
                width: 200,
                height: 40,
                resizeMode: "cover",
                alignSelf: "center",
                marginVertical: 15,
              }}
              source={require("@/utils/images/icon.png")}
            />
            <CustomText
              styled={{
                title: [styles.title, global.black],
                subtitle: [styles.subtitle, global.topGray],
              }}
              title="Bienvenido de nuevo"
              subtitle="Accede a tu cuenta"
            />
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            <CustomInput
              control={control}
              name={`email`}
              placeholder={"ejemplo@email.com"}
              styled={{
                text: styles.textInput,
                label: styles.labelInput,
                error: styles.errorInput,
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              text={`Correo electronico`}
              rules={{
                required: "Requerido",
                pattern: { value: EMAIL_REGEX, message: "Invalido" },
              }}
            />
            <CustomInput
              control={control}
              name={`password`}
              placeholder={"**********"}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
                security: styles.security,
              }}
              text={`Contraseña`}
              security={true}
              rules={{
                required: "Contraseña requerida",
                minLength: {
                  value: 8,
                  message: "8 caracteres minimo",
                },
              }}
            />
            {/* </View> */}
          </View>
          <View style={styles.buttons}>
            <CustomButton
              text={isLoading ? <ActivityIndicator /> : "Iniciar Sesion"}
              disabled={isLoading}
              handlePress={handleSubmit(onHandleLogin)}
              // handlePress={() => navigation.navigate("Welcome_Start")}

              textStyles={[styles.textLogin, global.white]}
              buttonStyles={[styles.login, global.mainBgColor]}
            />
            <View style={styles.selects}>
              <CustomButton
                text={`Olvidaste tu contrasena?`}
                handlePress={() => navigation.navigate("Forgot_App")}
                textStyles={[styles.forgot, global.topGray]}
              />
            </View>
            {/* <View style={styles.hairline}>
                <View style={[styles.line, global.bgWhiteSmoke]} />
                <Text style={[styles.textLine, global.bgWhite, global.midGray]}>
                  O inicia sesion con
                </Text>
              </View> */}

            {/* <View style={styles.extras}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 20,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/google.png")}
                />
              </View> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
