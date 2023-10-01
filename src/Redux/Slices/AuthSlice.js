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

const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {}
})

// export const {} = authSlice.actions
export default authSlice.reducer