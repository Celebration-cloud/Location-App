import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}/>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})