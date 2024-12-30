import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeColor } from "../hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ImagePicker from 'expo-image-picker'
import MainButton from './MainButton';
const ImageSelector = () => {
  const borderLine = useThemeColor({}, "tint");
  const text = useThemeColor({}, "text");
  const [imageUploaded, setImageUploaded] = useState("");
  const handleImagePicker = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if(!status){
            Alert.alert("Camera permissions", "You need camera ")
        }
        ImagePicker.launchCameraAsync()
    };
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ ...styles.imageContainer, borderColor: borderLine }}>
        <ThemedText style={styles.noImage}>No image selected</ThemedText>
        {/* <Image style={{width: "100%", height: "100%"}} alt="" /> */}
      </ThemedView>
      <MainButton
        onPress={handleImagePicker}
        style={{ padding: 10 }}
        text={{ color: text }}
      >
        Upload Image
      </MainButton>
    </ThemedView>
  );
};

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        gap: 10,
        alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: Dimensions.get("window").height / 4,
        borderWidth: 1
    },
    noImage: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
    }
})