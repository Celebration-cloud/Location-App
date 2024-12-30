import React from 'react'

import { StyleSheet, Text, TouchableNativeFeedback, useColorScheme, View } from 'react-native'

import { Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const HomeLayout = () => {
      const colorTheme = useColorScheme();
      const router = useRouter()
      const background = colorTheme === "dark" ? "black" : "white";
      const text = colorTheme === "dark" ? "light" : "dark";
      const title = colorTheme === "dark" ? "white" : "black";
      const handleAddNavigator = () => { 
        router.navigate({pathname: "/add"})
       };
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: text,
        headerStyle: {
          backgroundColor: background,
        },
        headerTintColor: title,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Location App",
          headerRight: ({}) => {
            return (
              <TouchableNativeFeedback onPress={handleAddNavigator}>
                <Ionicons name="add-circle-outline" color={title} size={30} />
              </TouchableNativeFeedback>
            );
          },
        }}
      />
      <Stack.Screen name='add' options={{title: "Add Places", headerTitleAlign}} />
      <Stack.Screen name='detail' />
      <Stack.Screen name='map' />
    </Stack>
  );
}

export default HomeLayout

const styles = StyleSheet.create({})