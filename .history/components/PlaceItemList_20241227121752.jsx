import React from 'react'

import { Dimensions, Image, StyleSheet } from 'react-native'
import { TouchableNativeFeedback } from 'react-native';
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
const PlaceItemList = (props) => {
    const { data, onPress } = props
    
  return (
    <TouchableNativeFeedback onPress={() => onPress(data)}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.imageContainer}>
          <Image
            style={{ width: "100%", height: "100%" }}
            alt={data.title}
          />
        </ThemedView>

        <ThemedView style={styles.detail}>
          <ThemedText style={styles.title}>{data.title}</ThemedText>
          <ThemedText style={styles.description}>
            {data?.description?.slice(0, 20)}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableNativeFeedback>
  );
}

export default PlaceItemList

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingVertical: Dimensions.get("window").scale / 5,
    paddingHorizontal: Dimensions.get("window").scale / 5,
    flexDirection: "row",
    gap: 10,
  },
  imageContainer: {
    height: 40,
    width: Dimensions.get("window").height / 4,
    borderRadius: 100,
  },
  detail: {
    paddingVertical: Dimensions.get("window").scale / 5,
    gap: 5,
  },
  title: {
    fontSize: Dimensions.get("window").scale / 2.5,
    fontWeight: "heavy",
    color: "white",
  },
  description: {
    fontSize: Dimensions.get("window").scale / 3.5,
  },
});