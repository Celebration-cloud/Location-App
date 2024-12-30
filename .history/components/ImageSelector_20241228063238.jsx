import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeColor } from "../../hooks/useThemeColor";
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