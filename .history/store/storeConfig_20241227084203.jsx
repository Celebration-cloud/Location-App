import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        place: location
    },
})

export default reduxStore