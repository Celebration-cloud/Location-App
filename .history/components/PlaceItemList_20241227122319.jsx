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
    height: 100,
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 10,
  },
  imageContainer: {
    height: 70,
    width: Dimensions.get("window").width / 5,
    borderRadius: 90,
    backgroundColor: "blue"
  },
  detail: {
    paddingVertical:10,
    gap: 5,
  },
  title: {
    fontSize: Dimensions.get("window").scale *15,
    fontWeight: "heavy",
  },
  description: {
    fontSize: Dimensions.get("window").scale * 10,
  },
});