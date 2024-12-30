import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        place: locationReducer,
    },
})

export default reduxStore