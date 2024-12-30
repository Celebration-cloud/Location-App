import { Text, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <Th
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
    </Th>
  );
}
