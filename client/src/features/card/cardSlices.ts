import { createSlice } from "@reduxjs/toolkit";
import { CardState } from "./cardTypes.ts";
import {createcard, deletecard, editcard, getallcard, getcardbyid, getmycards} from "./cardThunks.ts";

const initialState : CardState = {
    cards:[],
    selectedCard:null,
    isLoading:false,
    isError:false,
    errorMessage:''
}

const cardSlie = createSlice({
    name:'card',
    initialState,
    reducers:{},
    extraReducers:( builder ) => {
        builder

            //getMyCards
            .addCase(getmycards.pending , (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getmycards.fulfilled , (state,action) => {
                state.cards = action.payload;
                state.isLoading = false;
            })
            .addCase(getmycards.rejected , (state,action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message || "When purchasing delivery cards"
            })

            //getAllCards
            .addCase(getallcard.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getallcard.fulfilled , (state,action) => {
                state.cards = action.payload;
                state.isLoading = false;
            })
            .addCase(getallcard.rejected, (state,action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message || "When purchasing delivery cards"
            })

            //create Card
            .addCase(createcard.fulfilled , ( state , action ) => {
                state.cards.push(action.payload);
            })

            //update card
            .addCase(editcard.fulfilled , (state,action) => {
                const index = state.cards.findIndex((card) => card.id === action.payload.id)
                if(index !== -1) state.cards[index] = action.payload
            })

            //delete card
            .addCase(deletecard.fulfilled , (state,action) => {
                state.cards = state.cards.filter((card)=>card.id !== action.payload)
            })

            //get card by id
            .addCase(getcardbyid.pending,(state) => {
                state.isLoading = false;
            })
            .addCase(getcardbyid.fulfilled , (state,action) => {
                state.isLoading = false;
                state.selectedCard = action.payload
            })
            .addCase(getcardbyid.rejected,(state,action) => {
                state.isLoading = false;
                state.errorMessage = action.error.message || "When purchasing delivery cards"
            })
    }
})

export default cardSlie.reducer;