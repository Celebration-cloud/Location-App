import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        place: locationRe,
    },
})

export default reduxStore