import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tickets } from '@/utils/constants'

const Tickets = ({navigation}) => {
  const {routes} = tickets

  return (
    <View>
      <Text>Tickets</Text>
      <Button
          style={styles.button}
          title='Buy Ticket'
          onPress={() => navigation.navigate(routes.choose)}
        ></Button>
    </View>
  )
}

export default Tickets

const styles = StyleSheet.create({})