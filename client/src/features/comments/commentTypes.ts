export type CommentResponse = {
    id: number,
    title: string;
    content: string;
    createOn: string;
    stockID: number;
    creaateBy: string;
}

export type CreateCommentPayload = {
    title: string;
    content: string;
}

export type CommentState = {
    comments: CommentResponse[];
    selectedComment: CommentResponse[] | null;
    isLoading:boolean;
    isError:boolean;
    errorMessage:string;
}