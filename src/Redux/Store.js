import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice
    },
    deveTools: true
})

export default store