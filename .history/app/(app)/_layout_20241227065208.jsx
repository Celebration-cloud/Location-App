import React from 'react'

import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'

import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Location App",
          headerRight: ({}) => {
            return (
              <TouchableNativeFeedback>
                <Ionicons name="add-circle-outline" color={title} size={30} />
              </TouchableNativeFeedback>
            );
          },
        }}
      />
    </Stack>
  );
}

export default HomeLayout

const styles = StyleSheet.create({})