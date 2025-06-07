import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {MeResponse} from "./authTypes.ts";

interface AuthState {
    user: MeResponse | null;
}

const initialState:AuthState = {
    user : null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
      setUser(state,action:PayloadAction<MeResponse>) {
            state.user = action.payload
      },
      clearUser(state){
            state.user = null;
      },
    },
})

export const {setUser,clearUser} = authSlice.actions;
export default authSlice.reducer;