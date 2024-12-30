import React from 'react'

import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-web';

const PlaceItemL = (props) => {
    const { data, onPress } = props
  return (
    <TouchableNativeFeedback onPress={() => onPress(data)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: "" }}
            alt={data.title}
          />
        </View>

        <View style={styles.detail}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>
            {data?.description.slice(0, 20)}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

export default PlaceItemL

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