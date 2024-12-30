import React from 'react'
import { useLocalSearchParams, Stack} from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'
const DetailScreen = () => {
  const {data, title} = useLocalSearchParams()
  const itemTitle = JSON.parse(title)
  const itemData = JSON.parse(data)
  console.log(itemData)
  return (
    <View>
      <Stack.Screen option={{title: itemTitle }}/>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})