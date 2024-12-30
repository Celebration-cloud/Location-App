import { FlatList, StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PlaceItemList from "@/components/PlaceItemList"
import { useRouter } from "expo-router";
export default function Index() {
  const { loading, error, allPlaces} = useSelector(state => state.place)
  const router = useRouter()
  console.log(allPlaces)

  const handleSeePlace = (data) => { 
    console.log(data)
    router.navigate.
   };
  const renderListedPlaces = (data) => {

    return (
      <PlaceItemList data={data} onPress={handleSeePlace}/>
    )
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <FlatList data={allPlaces} keyExtractor={(value) => value.id} renderItem={(itemData) => renderListedPlaces(itemData.item)}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});