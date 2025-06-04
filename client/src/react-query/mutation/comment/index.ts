import {EndpointBuilder} from "@reduxjs/toolkit/query";
import {CommentResponse, CreateCommentPayload} from "../../../features/comment/commentTypes.ts";
import {CommentEndpoints} from "../../../features/comment/commentEnum.ts";

export const createComment = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<CommentResponse,{id:string,payload:CreateCommentPayload}>({
        query : ({id,payload}) => ({
            url : CommentEndpoints.CREATECOMMENT.replace(":id",id),
            method:'POST',
            body:payload
        }),
        invalidatesTags:["comment"]
    })
}

export const editComment = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<CommentResponse,{id:string,payload:CreateCommentPayload}>({
        query : ({id,payload}) => ({
            url : CommentEndpoints.EDITCOMMENT.replace(":id",id),
            method:'PUT',
            body:payload
        }),
        invalidatesTags:["comment"]
    })
}

export const deleteComment = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<CommentResponse,string>({
        query : (id) => ({
            url : CommentEndpoints.DELETECOMMENT.replace(":id",id),
            method:'DELETE',
        }),
        invalidatesTags:["comment"]
    })
}