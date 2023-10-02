import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/AxiosInstance"

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk('/courses/get', async()=>{
    try {
        const response = await axiosInstance.get(`http://localhost:5000/api/v1/courses`)
        toast.promise(response,
            {
                loading: "Loading course data...",
                success: "Courses loaded successfully",
                error: "Failed to get the courses"
            }
        )
        return await response.data.course
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {}
})

export default courseSlice.reducer