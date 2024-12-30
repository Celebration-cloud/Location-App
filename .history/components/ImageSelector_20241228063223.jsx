import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageSelector = () => {
      const borderLine = useThemeColor({}, "tint");
      const text = useThemeColor({}, "text");
      const [imageUploaded, setImageUploaded] = useState("");
  return (
    <View>
      <Text>ImageSelector</Text>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({})