import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    getMeService,
    loginService,
    logoutService,
    refreshService,
    registerService
} from "../../Services/auth/authService.ts";
import {AuthResponse, MeResponse} from "./authTypes.ts";

export const login = createAsyncThunk<AuthResponse,{userName:string,password:string}>(
    "auth/login",
    async ({userName,password},thunkAPI) => {
        try {
            return await loginService(userName,password)
        }catch (error:any){
            return thunkAPI.rejectWithValue(error.response?.data.message || "Login Failed")
        }
    }
)

export const register = createAsyncThunk<AuthResponse,{email:string,userName:string,password:string}>(
    "auth/register",
    async ({ email, userName, password },thunkAPI) => {
        try {
            return await registerService(email,password,userName)
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "regiter Failed")
        }
    }
)

export const logout = createAsyncThunk<void,void>("auth/logout",async () => {
    logoutService();
})

export const refresh = createAsyncThunk<AuthResponse>(
    "auth/refresh",
    async (_,thunkAPI) => {
        try {
            return await refreshService();
        }catch (error:any){
            return thunkAPI.rejectWithValue(error.response?.data.message || "refresh failed");
        }
    }
)

export const getMe = createAsyncThunk<MeResponse>(
    "auth/getMe",
    async (_,thunkAPI) => {
        try {
            return await getMeService()
        }catch (error:any){
            return thunkAPI.rejectWithValue(error.response?.data.message || "getMe failed")
        }
    }
)