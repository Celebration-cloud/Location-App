import { Stack } from "expo-router";

import {Provider} from "react-redux"

import store from '../store/storeConfig';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Provider st></Provider>
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
