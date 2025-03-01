export type CreateCountrypayload = {
    payload :{
        caption:string
        images:string;
    }
}

export type UpdateCountrypayload = {
    payload:{
        caption:string
        images:string;
    }
}

export type LikeCountryPayload = {
    payload: {
        userId:string
    }
}

export type UnLikeCountryPayload = {
    payload: {
        userId:string
    }
}

export type Post = {
    id: string;
    caption: string;
    image?: string;
    likes: string[];
    createdAt: string;
};

export type GetAllCardresponse = {
    message: string,
    posts: Post[],
}

export type GetOneCardRes = {
    message:string,
    post: {
        id: string;
        caption: string;
        image?: string;
        likes: string[];
        createdAt: string;
    }
}