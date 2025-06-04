import {EndpointBuilder} from "@reduxjs/toolkit/query";
import {CardResponse, createCardPayload} from "../../../features/card/cardTypes.ts";
import {CardEndpoints} from "../../../features/card/cardEnum.ts";

export const createCard = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<CardResponse,createCardPayload>({
        query:(payload:createCardPayload) => ({
            url:CardEndpoints.CreateCard,
            method:'POST',
            body: payload
        }),
        invalidatesTags:["card"]
    });
}

export const editCard = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<CardResponse,{id:string,payload:createCardPayload}>({
        query:({id, payload}) => ({
            url:CardEndpoints.EditCard.replace(":id",id),
            method:'PUT',
            body:payload
        }),
        invalidatesTags:["card"]
    })
}

export const deleteCard = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<CardResponse,string>({
        query:(id:string)=>({
            url:CardEndpoints.DeleteCard.replace(":id",id),
            method:'DELETE',
        }),
        invalidatesTags:["card"]
    })
}