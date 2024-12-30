import React from 'react'
import { useLocalSearchParams, Stack} from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'
const DetailScreen = () => {
  const {data, title} = useLocalSearchParams()
  const itemTitle = JSON.parse(title)
  const itemData = JSON.parse(data)
  console.log(d)
  return (
    <View>
      <Stack.Screen option={{title: title }}/>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})