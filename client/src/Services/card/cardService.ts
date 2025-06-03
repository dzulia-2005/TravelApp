import {CardResponse} from "../../features/card/cardTypes.ts";
import {httpClient} from "../../features";
import {CardEndpoints} from "../../features/card/cardEnum.ts";

export const getMyCard = async ():Promise<CardResponse[]> => {
    const response = await httpClient.get(CardEndpoints.MYCARD);
    return response.data;
}

export const getAllCard = async ():Promise<CardResponse[]> => {
    const response = await httpClient.get(CardEndpoints.ALLCARD);
    return response.data;
}

export const createCard = async (carddata:CardResponse) => {
    try {
        const response = await httpClient.post(CardEndpoints.CreateCard,carddata)
        return response.data;
    } catch (error) {
        console.error("card created failed",error)
        throw error;
    }
}

export const getCardById = async (id:string) => {
    try {
        const response = await httpClient.get(CardEndpoints.GetCardById.replace(":id",id));
        return response.data;
    }catch (error) {
        console.error("get by id card is failed",error);
        throw error;
    }
}

export const editCard = async (id:string,updateData:CardResponse) => {
    try {
        const response = await httpClient.put(CardEndpoints.EditCard.replace(":id",id),updateData);
        return response.data;
    }catch (error) {
        console.error("edit card failed",error);
        throw error;
    }
}

export const deleteCard = async (id:string) => {
    try {
        const response = await httpClient.delete(CardEndpoints.DeleteCard.replace(":id",id));
        return response.data;
    }catch (e) {
        console.error("delete card Failed",e);
        throw e;
    }
}