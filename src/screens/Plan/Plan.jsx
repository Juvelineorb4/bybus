import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Plan = ({navigation}) => {
  return (
    <View>
      <Text>Plan</Text>
      <Button
        style={styles.button}
        title="List Plans"
        onPress={() => navigation.navigate('List')}
      ></Button>
    </View>
  )
}

export default Plan

const styles = StyleSheet.create({})