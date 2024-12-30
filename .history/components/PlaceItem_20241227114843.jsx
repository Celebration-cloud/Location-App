import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native'

const PlaceItem = ({data}) => {
  return (
    <View>
        <View>
            <Image source={{uri: ""}} alt={data.title}/>
        </View>
        <View>
      <Text>{data.ti}</Text>
      <Text>PlaceItem</Text>
        </View>
    </View>
  )
}

export default PlaceItem

const styles = StyleSheet.create({})