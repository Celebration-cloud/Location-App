import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./reducers/locationReducer";


const store = configureStore({
    reducer: {
        place: locationReducer,
    },
    m
})

export default store