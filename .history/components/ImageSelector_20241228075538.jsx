import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeColor } from "../hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import * as ImagePicker from 'expo-image-picker'
import MainButton from './MainButton';
const ImageSelector = () => {
  const borderLine = useThemeColor({}, "tint");
  const text = useThemeColor({}, "text");
  const [imageUploaded, setImageUploaded] = useState(null);

  const handleImagePicker = async () => {
   const status = await ImagePicker.requestCameraPermissionsAsync()
   console.log(status)
   if(!status.granted){
    Alert.alert("Camera permission denied", "you are not allowed to upload without permission", [{text: "okay"}])
    return;
   }
   let image = await ImagePicker.launchCameraAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
   })
   
   if(!image.canceled){

       console.log(image.assets[0].uri)
       setImageUploaded(image.assets[0].uri)
   }

  };
  console.log(`Image: ${imageUploaded}`)
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ ...styles.imageContainer, borderColor: borderLine }}>
        {imageUploaded && (<Image style={{width: "100%", height: "100%"}} source={{uri: }} alt="" /> )}
        {!imageUploaded && (<ThemedText style={styles.noImage}>No image selected</ThemedText>)}
        
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