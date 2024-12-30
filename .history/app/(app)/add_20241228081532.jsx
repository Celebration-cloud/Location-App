import React, { useState } from 'react'

import { Dimensions, Image, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'

import { useRouter } from 'expo-router';

import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import MainButton from '../../components/MainButton';
import { addPlaces } from '../../store/actions/locationAction';
import { useMode } from '../../hooks/useMode';
import {useThemeColor } from '../../hooks/useThemeColor';
import ImageSelector from '../../components/ImageSelector';

const AddScreen = () => {
  const borderLine = useThemeColor({}, "tint")
  const text = useThemeColor({}, "text")
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch()
  const router = useRouter();

  const handleSubmit = () => { 
    const places = {
      id: uuidv4(),
      title: title,
      image: image
    }
    console.log(places);
    dispatch(addPlaces(places, router))
    
   };
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>Title:</ThemedText>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        style={{ ...styles.input, color: text, borderColor: borderLine }}
      />
      <ImageSelector setImage={setImage}/>
      <MainButton onPress={handleSubmit} style={{padding: 10}} text={{fontSize: 15}}>
        Submit
      </MainButton>
    </ThemedView>
  );
}

export default AddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  label: {
    fontSize: Dimensions.get("window").fontScale * 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "rgba(255, 255, 255, 0.5 opacity)",
    borderRadius: 10,
  },
})