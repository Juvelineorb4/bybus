import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({navigation}) => {
  return (
    <View>
      <Text>List</Text>
      <Button
        style={styles.button}
        title="Selected"
        onPress={() => navigation.navigate('Selected')}
      ></Button>
    </View>
  )
}

export default List

const styles = StyleSheet.create({})