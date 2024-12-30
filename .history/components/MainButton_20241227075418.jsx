import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-web'

const MainButton = () => {
  return (
    <TouchableNativeFeedback>
      <View>
        <Text>Press me!</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default MainButton

const styles = StyleSheet.create({})