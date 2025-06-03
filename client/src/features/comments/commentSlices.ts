import  { createSlice } from "@reduxjs/toolkit";
import {CommentState} from "./commentTypes.ts";
import {createcomment, deletecommentById, editcomment, getAllComment, getcommentById} from "./commentThunks.ts";

const initialState : CommentState = {
    comments : [],
    selectedComment : null,
    isLoading : false,
    isError : false,
    errorMessage : '',
}

const commentslice = createSlice({
    name:'commentslice',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            //get all comments
            .addCase(getAllComment.pending , (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getAllComment.fulfilled , (state,action) => {
                state.isLoading = false;
                state.comments = action.payload
            })
            .addCase(getAllComment.rejected,(state,action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message || "when purchasing delivery comments"
            })

            //get comment by id
            .addCase(getcommentById.pending, (state) => {
                state.isLoading = false;
            })
            .addCase(getcommentById.fulfilled,(state,action) => {
                state.isLoading = false;
                state.comments = action.payload
            })
            .addCase(getcommentById.rejected,(state,action)=>{
                state.isLoading = false;
                state.errorMessage = action.error.message || "when purchasing delivery comments"
            })

            //delete comments
            .addCase(deletecommentById.fulfilled,(state,action) => {
                state.comments.filter((card)=>card.id !== action.payload)
            })

            //create Comment
            .addCase(createcomment.fulfilled,(state,action) => {
                state.comments.push(action.payload)
            })

            //edit comment
            .addCase(editcomment.fulfilled,(state,action) => {
                const index = state.comments.findIndex((card)=>card.id === action.payload.id);
                if(index !== -1) state.comments[index] = action.payload
            })

    }
})

export default commentslice.reducer;