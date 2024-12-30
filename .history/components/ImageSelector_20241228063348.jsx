import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeColor } from "../../hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
const ImageSelector = () => {
      const borderLine = useThemeColor({}, "tint");
      const text = useThemeColor({}, "text");
      const [imageUploaded, setImageUploaded] = useState("");
  return (
    <ThemedView>
      <ThemedView style={{ ...styles.imageContainer, borderColor: borderLine }}>
        <Image alt="" />
      </ThemedView>
      <ThemedText>ImageSelector</ThemedText>
    </ThemedView>
  );
}

export default ImageSelector

const styles = StyleSheet.create({})