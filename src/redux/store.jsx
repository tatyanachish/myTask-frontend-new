import { configureStore } from "@reduxjs/toolkit";
import { apiTask } from "./apiTask";

export const store = configureStore({
    reducer: {
        [apiTask.reducerPath]: apiTask.reducer
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiTask.middleware)
})