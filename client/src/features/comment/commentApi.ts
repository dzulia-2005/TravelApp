import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../baseQuery.ts";
import {getComment, getCommentById} from "../../react-query/query/comment";
import {createComment, deleteComment, editComment} from "../../react-query/mutation/comment";

export const commentApi = createApi({
    reducerPath : 'commentApi',
    baseQuery:baseQuery,
    tagTypes :['comment'],
    endpoints:(builder) => ({
        getComment : getComment(builder),
        getCommentById : getCommentById(builder),
        createComment : createComment(builder),
        editComment : editComment(builder),
        deleteComment : deleteComment(builder)
    })

})