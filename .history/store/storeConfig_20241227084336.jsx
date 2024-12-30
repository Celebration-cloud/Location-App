import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./reducers/locationReducer";


const store = configureStore({
    reducer: {
        place: locationReducer,
    },
    middleware: ((getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            serializableCheck: false
            });
            return middleware;
    
    
    })
})

export default store