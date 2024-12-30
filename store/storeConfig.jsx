import thunk from "redux-thunk";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import { locationReducer } from "./reducers/locationReducer";

const store = configureStore(
  {
    reducer: {
      place: locationReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  applyMiddleware(thunk)
);

export default store