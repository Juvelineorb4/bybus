import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateTicket = ({navigation}) => {
  return (
    <View>
      <Text>CreateTicket</Text>
      <Button
          style={styles.button}
          title='Buy'
          onPress={() => navigation.navigate('PaymentView')}
        ></Button>
    </View>
  )
}

export default CreateTicket

const styles = StyleSheet.create({})