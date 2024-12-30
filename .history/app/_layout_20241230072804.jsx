import { Stack } from "expo-router";

import {Provider} from "react-redux"

import store from '../store/storeConfig';

import "react-native-get-random-values";
impo

createTable
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(app)" />
      </Stack>
    </Provider>
  );
}
