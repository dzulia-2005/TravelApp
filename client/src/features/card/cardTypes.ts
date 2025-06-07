
export type CardResponse = {
    id : number;
    title : string;
    company : string;
    purchase: number;
    lastDividend: number;
    industry : string;
    marketCap: number;
    imageUrl: null;
    comments: Array<{
        id: string;
        title: string;
        content: string;
        stockID: string;
    }>;
}

export type createCardPayload = {
    title : string;
    company : string;
    purchase : number;
    lastDividend: number;
    industry : string;
    marketCap: number;
    imageUrl: string;
}