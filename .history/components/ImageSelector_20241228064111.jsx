import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeColor } from "../hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MainButton from './MainButton';
const ImageSelector = ({ handleImagePicker }) => {
  const borderLine = useThemeColor({}, "tint");
  const text = useThemeColor({}, "text");
  const [imageUploaded, setImageUploaded] = useState("");
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ ...styles.imageContainer, borderColor: borderLine }}>
        <ThemedText>No image selected</ThemedText>
        {/* <Image style={{width: "100%", height: "100%"}} alt="" /> */}
      </ThemedView>
      <MainButton
        onPress={handleImagePicker}
        style={{ padding: 20 }}
        text={{ color: text }}
      >
        Upload Image
      </MainButton>
    </ThemedView>
  );
};

export default ImageSelector

const styles = StyleSheet.create({
    container
})