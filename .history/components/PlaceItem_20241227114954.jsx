import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native'

const PlaceItem = ({data}) => {
  return (
    <View>
      <View>
        <Image source={{ uri: "" }} alt={data.title} />
      </View>

      <View>
        <Text>{data.title}</Text>
        <Text>{data?.description.slice(0, 20)}</Text>
      </View>
    </View>
  );
}

export default PlaceItem

const styles = StyleSheet.create({
    container: {},
})