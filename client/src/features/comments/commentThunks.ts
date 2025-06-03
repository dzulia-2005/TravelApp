import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    CreateComment,
    DeleteCommentById,
    EditComment,
    GetCommentById,
    getComments
} from "../../Services/comments/commentService.ts";
import {CreateCommentPayload} from "./commentTypes.ts";

export const getAllComment = createAsyncThunk(
    "getallcomments",
    async (_,thunkAPI) => {
        try {
            return await getComments();
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed to fetch comments");
        }
    }
)

export const getcommentById = createAsyncThunk(
    "getcommentById",
    async (id:string,thunkAPI) => {
        try {
            return await GetCommentById(id);
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed to fetch comments by id")
        }
    }
)

export const deletecommentById = createAsyncThunk(
    "deletecommentById",
    async (id:string,thunkAPI) => {
        try {
            return await DeleteCommentById(id);
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed to delete comment")
        }
    }
)

export const createcomment = createAsyncThunk(
    "createcomment",
    async ({stockId,payload}:{stockId:string,payload:CreateCommentPayload},thunkAPI) => {
        try {
            return await CreateComment({stockId, payload});
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed to create comment")
        }
    }
)

export const editcomment = createAsyncThunk(
    "editcomment",
    async ({id,payload}:{id:string,payload:CreateCommentPayload},thunkAPI) => {
        try {
            return await EditComment({id,payload});
        }catch (error : any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed to edit comment")
        }
    }
)