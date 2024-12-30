import { FlatList, StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Index() {
  const { loading, error, allPlaces} = useSelector(state => state.place)
  console.log(allPlaces)
  const renderListedPlaces = () => {
    return (
      <View>
      <The>hello</The>
      </View>
    )
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <FlatList data={allPlaces} keyExtractor={(value) => value.id} renderItem={(itemData) => <renderListedPlaces data={itemData.item}/>}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});