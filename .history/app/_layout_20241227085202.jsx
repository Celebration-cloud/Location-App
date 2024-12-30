import { Stack } from "expo-router";

import {Provider} from "react-redux"

import store from '../store/storeConfig';

export default function RootLayout() {
  return (
    <Provider store={store}>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="(app)" />
      </Provider>
    </Stack>
  );
}
