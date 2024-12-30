import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const AddScreen = () => {
  const [title, setTitle] = useState("")
  return (
    <ThemedView>
      <ThemedText f>Title:</ThemedText>
      <TextInput onChangeText={(text) => setTitle(text)} style={} />
    </ThemedView>
  )
}

export default AddScreen

const styles = StyleSheet.create({})