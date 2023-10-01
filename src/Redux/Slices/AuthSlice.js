import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/AxiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem("data") || {}
}

export const createAccount = createAsyncThunk('auth/signup', async(data)=>{
    try {
        const res = await axiosInstance.post(`http://localhost:5000/api/v1/user/register`, data)
        const successMessage = await data?.data?.message
        toast.promise( 
            Promise.resolve(successMessage),
            {
            loading: 'Wait creating your account',
            success: "Account created successfully",
            error: 'Failed to create account'
        })
        return res.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const login = createAsyncThunk('auth/login', async(data)=>{
    try {
        const res = await axiosInstance.post(`http://localhost:5000/api/v1/user/login`, data)
        const successMessage = await data?.data?.message
        toast.promise( 
            Promise.resolve(successMessage),
            {
            loading: 'Wait authentication in progress...',
            success: "Account created successfully",
            error: 'Failed to login'
        })
        return res.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled, (state,action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("role", action?.payload?.role)
            state.isLoggedIn = true
            state.data = action?.payload?.user
            state.role = action?.payload?.role
        })
    }
})

// export const {} = authSlice.actions
export default authSlice.reducer