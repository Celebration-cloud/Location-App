import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        place: locat,
    },
})

export default reduxStore