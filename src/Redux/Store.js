import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";
import CourseSlice from "./Slices/CourseSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        course: CourseSlice
    },
    deveTools: true
})

export default store