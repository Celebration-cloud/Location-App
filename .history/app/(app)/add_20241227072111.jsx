import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const AddScreen = () => {
  const [title, setTitle] = useState("")
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.}>Title:</ThemedText>
      <TextInput onChangeText={(text) => setTitle(text)} style={styles.input} />
    </ThemedView>
  )
}

export default AddScreen

const styles = StyleSheet.create({})