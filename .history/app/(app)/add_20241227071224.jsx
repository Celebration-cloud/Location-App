import React from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const AddScreen = () => {
  const [title, setTitle] = use
  return (
    <ThemedView>
      <ThemedText>Title:</ThemedText>
      <TextInput onChangeText={} />
    </ThemedView>
  )
}

export default AddScreen

const styles = StyleSheet.create({})