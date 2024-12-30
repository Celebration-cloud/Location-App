import { Stack } from "expo-router";

import {Provider} from "react-redux"

import store from '../store/storeConfig';

import "react-native-get-random-values";
import {createTable} from '../helpers/db'

createTable().then(() => console.log("Table created successfully")).catch((errors) => console.log("Error creating table:", errors));


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
