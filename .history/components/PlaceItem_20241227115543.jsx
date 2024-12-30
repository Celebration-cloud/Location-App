import React from 'react'

import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const PlaceItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={{wi}} source={{ uri: "" }} alt={data.title} />
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
    paddingVertical: Dimensions.set("window").scale / 5,
    paddingHorizontal: Dimensions.set("window").scale / 5,
    flexDirection: "row",
    gap: 10,
  },
  imageContainer: {
    height: Dimensions.set("window").height / 4,
    width: Dimensions.set("window").height / 4,
    borderRadius: 100,
  },
  detail: {
    paddingVertical: Dimensions.set("window").scale / 5,
    gap: 5,
  },
  title: {
    fontSize: Dimensions.set("window").scale / 2.5,
    fontWeight: "heavy",
  },
  description: {
    fontSize: Dimensions.set("window").scale / 3.5,
  },
});