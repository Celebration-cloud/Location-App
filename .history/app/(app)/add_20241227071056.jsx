import React from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const AddScreen = () => {
  return (
    <ThemedView>
      <ThemedText>Title:</ThemedText>
      <TextInput on/>
    </ThemedView>
  )
}

export default AddScreen

const styles = StyleSheet.create({})