import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        place: locationRedu,
    },
})

export default reduxStore