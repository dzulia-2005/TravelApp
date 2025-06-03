import {createAsyncThunk} from "@reduxjs/toolkit";
import {createCard, deleteCard, editCard, getAllCard, getCardById, getMyCard} from "../../Services/card/cardService.ts";
import {CardResponse} from "./cardTypes.ts";

export const getmycards = createAsyncThunk(
    "card/getmycards",
    async (_,thunkAPI) => {
        try {
            return await getMyCard();
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed get my cards")
        }
    }
)

export const getallcard = createAsyncThunk(
    "card/getallcard",
    async (_,thunkAPI) => {
        try {
            return await getAllCard();
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed get all cards")
        }
    }
)

export const createcard = createAsyncThunk(
    "card/createcard",
    async (cardData:CardResponse,thunkAPI) => {
        try {
            return await createCard(cardData);
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed create card")
        }
    }
)

export const getcardbyid = createAsyncThunk(
    "card/getcardbyid",
    async (id:string,thunkAPI) => {
        try {
            return await getCardById(id);
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed get card")
        }
    }
)

export const editcard = createAsyncThunk(
    "card/editcard",
    async ({id,data}:{id:string,data:CardResponse},thunkAPI) => {
        try {
            return await editCard(id,data)
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed edit card")
        }
    }
)

export const deletecard = createAsyncThunk(
    "card/deletecard",
    async (id:string,thunkAPI) => {
        try {
            return await deleteCard(id);
        }catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data.message || "failed delete card")
        }
    }
)