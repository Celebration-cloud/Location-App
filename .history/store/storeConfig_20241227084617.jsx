import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./reducers/locationReducer";
impoort

const store = configureStore({
    reducer: {
        place: locationReducer,
    },
    middleware: ((getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware({
        serializableCheck: false,
      });
      return middleware;
    }, applyMiddleware(thunk))

})

export default store