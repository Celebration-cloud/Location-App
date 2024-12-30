import React from 'react'

import { Dimensions, Image, StyleSheet } from 'react-native'
import { TouchableNativeFeedback } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const PlaceItemList = (props) => {
  const lineColor = useThemeColor({}, "tint")
  const imageColor = useThemeColor({}, "icon")

    const { data, onPress } = props
    
  return (
    <TouchableNativeFeedback onPress={() => onPress(data)}>
      <ThemedView style={{...styles.container, borderColor: lineColor}}>
        <ThemedView style={{...styles.imageContainer, backgroundColor: imageColor}}>
          <Image
            style={{ width: "100%", height: "100%" }}
            alt={data.title}
            so
          />
        </ThemedView>

        <ThemedView style={styles.detail}>
          <ThemedText style={styles.title}>{data.title}</ThemedText>
          <ThemedText style={styles.description}>
            {data?.description?.slice(0, 20)}
            ifcifnein
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
    marginHorizontal: 10,
    borderBottomWidth: 1, 
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  imageContainer: {
    height: 70,
    width: Dimensions.get("window").width / 5,
    borderRadius: 90,
  },
  detail: {
    gap: 5,
  },
  title: {
    fontSize: Dimensions.get("window").scale *8,
    fontWeight: "heavy",
  },
  description: {
    fontSize: Dimensions.get("window").scale * 5,
  },
});