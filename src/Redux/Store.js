import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";
import CourseSlice from "./Slices/CourseSlice";
import LectureSlice from "./Slices/LectureSlice";
import RazorpaySlice from "./Slices/RazorpaySlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        course: CourseSlice,
        razorpay: RazorpaySlice,
        lecture: LectureSlice
    },
    deveTools: true
})

export default store