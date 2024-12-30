import { StyleSheet, Text, View } from 'react-native'
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
    <ThemedView>
      <ThemedView style={{ ...styles.imageContainer, borderColor: borderLine }}>
        <ThemedText>ImageSelector</ThemedText>
        <Image alt="" />
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
    
})