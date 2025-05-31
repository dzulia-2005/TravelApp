export type AuthState = {
    user : MeResponse | null;
    accessToken : string | null;
    refreshToken : string | null;
    isLoading : boolean;
    isError : boolean;
    errorMessage : string | null;
}

export type AuthResponse = {
    accessToken : string;
    refreshToken : string;
    user : MeResponse | null;
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
