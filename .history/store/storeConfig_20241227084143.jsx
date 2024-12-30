import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        place: locationReduc,
    },
})

export default reduxStore