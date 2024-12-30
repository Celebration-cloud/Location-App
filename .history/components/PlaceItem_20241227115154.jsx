import React from 'react'

import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

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
    container: {
        height: Dimensions.set("window").height / 4,
        paddingVertical: Dimensions.set("window").scale /5,
        paddingHorizontal: Dimensions.set("window").scale / 5,
    },
    imageCon
})