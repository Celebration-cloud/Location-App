import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'
const DetailScreen = () => {
  const {data, title} = useLocalSearchParams()
  
  return (
    <View>
      <Stack.S
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})