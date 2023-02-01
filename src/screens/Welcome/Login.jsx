import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/Welcome.module.css";

const Login = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route.params.id)}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
