import React, { useState } from 'react'

import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const AddScreen = () => {
  const [title, setTitle] = useState("")
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>Title:</ThemedText>
      <TextInput onChangeText={(text) => setTitle(text)} style={styles.input} />
    </ThemedView>
  )
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
  input: 
})