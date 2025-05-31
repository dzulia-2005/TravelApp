import { createSlice } from "@reduxjs/toolkit";
import { AuthState ,} from "./authTypes.ts";
import {getMe, login, logout, refresh, register} from "./authThunks.ts";


const initialState : AuthState = {
    user : null ,
    accessToken : localStorage.getItem("accessToken"),
    refreshToken : localStorage.getItem("refreshToken"),
    isLoading : false,
    isError : false,
    errorMessage : null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder

            //Login
            .addCase(login.pending,state => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(login.fulfilled,state => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(login.rejected,(state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload as string;
            })

            //Logout
            .addCase(logout.fulfilled,state => {
                state.user = null;
                state.accessToken = null;
                state.refreshToken = null;
            })


            //Register
            .addCase(register.pending,state => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(register.fulfilled,state => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(register.rejected,(state,action) => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = action.payload as string;
            })


            //Refresh
            .addCase(refresh.fulfilled,(state,action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.user = action.payload.user;
            })
            .addCase(refresh.rejected,state=>{
                state.refreshToken = null;
                state.accessToken = null;
                state.user = null;
            })

            //getme
            .addCase(getMe.pending,state => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(getMe.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.user = action.payload;
                state.isError = false;
                state.errorMessage = null
            })
            .addCase(getMe.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload as string;
            })

    }
})

export default authSlice.reducer;