import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/AxiosInstance"

const initialState = {
    lectures: []
}

export const getCourseLectures = createAsyncThunk("/course/lecture/get", async(id)=>{
    try {
        const response = await axiosInstance.get(`/courses/${id}`)
        const successMessage = response?.data?.message

        toast.promise(Promise.resolve(successMessage), {
            loading: 'Fetching course lecture',
            success: successMessage,
            error: "Failed to load lecture"
        })
        return await response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
export const addCourseLectures = createAsyncThunk("/course/lecture/add", async(data)=>{
    try {
        const formData = new FormData()
        formData.append('lecture', data.lecture)
        formData.append('title', data.title)
        formData.append('description', data.description)
        
        const response = axiosInstance.post(`/courses/${data.id}`, formData)
        
        toast.promise(response, {
            loading: 'Adding course lecture',
            success: "Lecture added successfully",
            error: "Failed to add the lecture"
        })
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
export const deleteCourseLectures = createAsyncThunk("/course/lecture/delete", async(data)=>{
    try {
        const response = await axiosInstance.delete(`/courses/?courseId=${data.courseId}&lectureId=${data.lectureId}`)
        const successMessage = response?.data?.message

        toast.promise(Promise.resolve(successMessage), {
            loading: 'Deleting course lecture',
            success: successMessage,
            error: "Failed to delete the lectures"
        })
        return await response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const lectureSlice = createSlice({
    name: 'lecture',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseLectures.fulfilled, (state,action)=>{
            state.lectures = action?.payload?.course?.lectures
        })
        builder.addCase(addCourseLectures.fulfilled, (state, action)=>{
            state.lectures = action?.payload?.course?.lectures
        })
    }
})

export default lectureSlice.reducer