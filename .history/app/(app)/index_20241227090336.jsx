import { Text, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useSelector } from "react-redux";

export default function Index() {
  const { loading, error, allPlaces} = useSelector(state => state.place)
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
    </ThemedView>
  );
}
