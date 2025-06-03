//get comment
import {CommentResponse, CreateCommentPayload} from "../../features/comments/commentTypes.ts";
import {httpClient} from "../../features";
import {CommentEndpoints} from "../../features/comments/commentEnum.ts";

export const getComments = async ():Promise<CommentResponse[]> => {
    const response = await httpClient.get(CommentEndpoints.GETALL);
    return response.data;
}

export const GetCommentById = async (id:string):Promise<CommentResponse[]> => {
    const response = await httpClient.get(CommentEndpoints.GETBYID.replace(":id",id))
    return response.data;
}

export const DeleteCommentById = async (id:string) => {
    const response = await httpClient.delete(CommentEndpoints.DELETECOMMENT.replace(":id",id));
    return response.data
}

export const CreateComment = async ({stockId,payload}:{stockId:string,payload:CreateCommentPayload}) => {
    const response = await httpClient.post(CommentEndpoints.CREATECOMMENT.replace(":stockId",stockId),payload);
    return response.data;
}

export const EditComment = async ({id,payload}:{id:string,payload:CreateCommentPayload}) => {
    const response = await httpClient.put(CommentEndpoints.EDITCOMMENT.replace(":id",id),payload);
    return response.data;
}