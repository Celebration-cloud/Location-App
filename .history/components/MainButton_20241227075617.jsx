import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-web'

const MainButton = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View>
        <Text>{props.children}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default MainButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        textAlign
    },
})