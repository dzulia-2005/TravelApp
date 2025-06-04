import {EndpointBuilder} from "@reduxjs/toolkit/query";
import {CommentResponse} from "../../../features/comment/commentTypes.ts";
import {CommentEndpoints} from "../../../features/comment/commentEnum.ts";

export const getComment = (builder:EndpointBuilder<any, any, any>) => {
    return builder.query<CommentResponse,void>({
        query : () => CommentEndpoints.GETALL,
        providesTags : ["comment"]
    });
}

export const getCommentById = (builder:EndpointBuilder<any, any, any>) => {
    return builder.query<CommentResponse,string>({
        query : (id) => CommentEndpoints.GETBYID.replace(":id",id),
        providesTags : ["comment"]
    })
}