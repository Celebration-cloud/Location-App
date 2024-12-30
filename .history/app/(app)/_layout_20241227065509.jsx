import React from 'react'

import { StyleSheet, Text, TouchableNativeFeedback, useColorScheme, View } from 'react-native'

import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const HomeLayout = () => {
      const colorTheme = useColorScheme();
      console.log(colorTheme);
      const background = colorTheme === "dark" ? "black" : "white";
      const text = colorTheme === "dark" ? "light" : "dark";
      const title = colorTheme === "dark" ? "white" : "black";
  return (
    <Stack>
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