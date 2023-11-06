import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/AxiosInstance";

const storedData = localStorage.getItem('data');
const parsedData = storedData ? JSON.parse(storedData) : {};
const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem('role') || "",
    data: parsedData
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
        const res = axiosInstance.post(`http://localhost:5000/api/v1/user/login`, data)
        toast.promise(res,
            {
            loading: 'Wait authentication in progress...',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to login'
        })
        return (await res).data
    } catch (e) {
        toast.error(e?.response?.data?.message)
    }
})
export const logout = createAsyncThunk('auth/logout', async()=>{
    try {
        const res = await axiosInstance.get(`http://localhost:5000/api/v1/user/logout`)
        const successMessage = await res?.data?.message
        toast.promise( 
            Promise.resolve(successMessage),
            {
            success: "Logout successfully",
            error: 'Failed to logout'
        })
        return res.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
export const updateProfile = createAsyncThunk('user/update/profile', async(data)=>{
    try {
        const res = await axiosInstance.put(`http://localhost:5000/api/v1/user/update/${data[0]}`, data[1])
        const successMessage = await res?.data?.message
        toast.promise( 
            Promise.resolve(successMessage),
            {
            loading: "Wait! profile update in progress...", 
            success: "Profile updated successfully",
            error: 'Failed to update profile'
        })
        return res.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getUserData = createAsyncThunk('user/details', async()=>{
    try {
        const res = await axiosInstance.get(`http://localhost:5000/api/v1/user/me`)
        return res.data
    } catch (error) {
        toast.error(error?.message)
    }
})

const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(login.fulfilled, (state,action)=>{
            if (action?.payload?.user) {
                localStorage.setItem('data', JSON.stringify(action?.payload?.user));
            } else {
                localStorage.removeItem('data'); // Remove the 'data' key
            }
            // localStorage.setItem("data", JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("role", action?.payload?.user?.role)
            state.isLoggedIn = true
            state.data = action?.payload?.user
            state.role = action?.payload?.user?.role
        }).addCase(logout.fulfilled, (state)=>{
            localStorage.clear()
            state.data = {}
            state.isLoggedIn = false
            state.role = ''
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("role", action?.payload?.user?.role)
            state.isLoggedIn = true
            state.data = action?.payload?.user
            state.role = action?.payload?.user?.role
        })
    }
})

// export const {} = authSlice.actions
export default authSlice.reducer