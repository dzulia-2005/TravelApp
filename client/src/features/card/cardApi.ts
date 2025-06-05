import {createApi} from "@reduxjs/toolkit/query/react";
import { customBaseQuery} from "../baseQuery.ts";
import {getAllCards, getCardById, getMyCard} from "../../react-query/query/card";
import {createCard, deleteCard, editCard} from "../../react-query/mutation/card";

export const cardApi = createApi({
    reducerPath : 'cardApi',
    baseQuery : customBaseQuery,
    tagTypes : ['Card'],
    endpoints : (builder) => ({
        getAllCards : getAllCards(builder),
        getMyCard : getMyCard(builder),
        getCardById : getCardById(builder),

        createCard : createCard(builder),
        editCard : editCard(builder),
        deleteCard : deleteCard(builder)
    })
})