
export type AuthResponse = {
    token : string;
    refreshToken : string;
}

export type MeResponse = {
    id:string;
    userName:string;
    email:string;
    stocks:Array<{
        id: string;
        company: string;
        title: string;
        purchase: number;
        industry: string;
        comments: Array<{
            id: string;
            title: string;
            content: string;
            stockID: string;
        }>;
    }>
};

export type registerPayload = {
    userName : string;
    email :string;
    password:string;
}

export type loginPayload = {
    userName : string;
    password:string;
}

export type refreshPayload = {
    refreshToken:string;
}
