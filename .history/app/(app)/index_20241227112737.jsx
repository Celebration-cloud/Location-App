import { StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Index() {
  const { loading, error, allPlaces} = useSelector(state => state.place)
  console.log(allPlaces)
  return (
    <ThemedView>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <F
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});