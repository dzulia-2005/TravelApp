import {CardResponse} from "../../../features/card/cardTypes.ts";
import {CardEndpoints} from "../../../features/card/cardEnum.ts";
import {EndpointBuilder} from "@reduxjs/toolkit/query";

export const getAllCards = (builder: EndpointBuilder<any, any, any>) => {
    return builder.query<CardResponse[], void>({
        query: () => CardEndpoints.ALLCARD,
        providesTags: ["card"]
    });
}

export const getMyCard = (builder:EndpointBuilder<any, any, any>) => {
    return builder.query<CardResponse[] , void>({
        query : () => CardEndpoints.MYCARD,
        providesTags: ["card"]
    })
}

export const getCardById = (builder:EndpointBuilder<any, any, any>) => {
    return builder.query<CardResponse[] , string>({
        query : (id) => CardEndpoints.GetCardById.replace(":id",id),
        providesTags:["card"]
    })
}