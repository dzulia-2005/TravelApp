export type CardResponse = {
    id : number;
    title : string;
    company : string;
    purchase: string;
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

export type CardState = {
    cards: CardResponse[];
    selectedCard: CardResponse | null;
    isLoading:boolean;
    isError:boolean;
    errorMessage:string;
}