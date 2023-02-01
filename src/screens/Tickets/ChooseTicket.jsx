import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tickets } from '@/utils/constants'

const ChooseTicket = ({navigation}) => {
  const {routes, buttons} = tickets
  return (
    <View>
      <Text>Tickets</Text>
      {buttons.map((button) => (
        <Button
          style={styles.button}
          title={button.title}
          key={button.id}
          onPress={() => navigation.navigate(routes.create)}
        ></Button>
      ))}
      
    </View>
  )
}

export default ChooseTicket

const styles = StyleSheet.create({})