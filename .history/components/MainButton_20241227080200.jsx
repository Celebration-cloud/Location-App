import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-web'

const MainButton = (props) => {
    
  return (
    <TouchableNativeFeedback a onPress={props.onPress}>
      <View style={{...styles.container, ...props.style}}>
        <Text style={{...styles.text, ...props.text}}>{props.children}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default MainButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: "royalblue"
    },
    text: {
        color: "white"
    }
})