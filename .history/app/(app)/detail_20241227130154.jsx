import React from 'react'
import { useLocalSearchParams, Stack} from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'
const DetailScreen = () => {
  const {data, title} = useLocalSearchParams()
  console.log(data, title)
  return (
    <View>
      <Stack.Screen o option={{title: title }}/>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})