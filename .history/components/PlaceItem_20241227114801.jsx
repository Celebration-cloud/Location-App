import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native'

const PlaceItem = ({data}) => {
  return (
    <View>
        <View >
            <Image source={{uri: ""}} alt={data.title}/>
        </View>
      <Text>PlaceItem</Text>
    </View>
  )
}

export default PlaceItem

const styles = StyleSheet.create({})