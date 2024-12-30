import React, { useState } from 'react'

import { Dimensions, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'

import { useRouter } from 'expo-router';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {useThemeColor} from "@/hooks/useThemeColor";

import { useMode } from '../../hooks/useMode';
import MainButton from '../../components/MainButton';

const AddScreen = () => {
  const [title, setTitle] = useState("");
  const {titleTheme} = useMode();

  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>Title:</ThemedText>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        style={{ ...styles.input, color: titleTheme, borderColor: titleTheme }}
      />
      <MainButton style={{padding: 10}} text={{fontSize: 30}}>
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