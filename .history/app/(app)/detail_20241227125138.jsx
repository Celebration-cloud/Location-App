import React from 'react'
import { useLocalSearchParams, Stack} from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'
const DetailScreen = () => {
  const {data, title} = useLocalSearchParams()
  
  return (
    <View>
      <Stack.Screen />
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})