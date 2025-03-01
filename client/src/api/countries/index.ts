import {httpClient} from "../index"
import { COUNTRIES_ENDPOINTS } from "./index.enum"
import { CreateCountrypayload, GetAllCardresponse,
         GetOneCardRes,
         LikeCountryPayload, UnLikeCountryPayload, 
         UpdateCountrypayload, 
        } from "./index.types"

export const CreateCountry = ({userId,payload}:{userId:string; payload:CreateCountrypayload}) => {
    return httpClient
        .post(COUNTRIES_ENDPOINTS.CREATE_COUNTRY.replace(":userId",userId),payload)
        .then((res)=>res.data)
}

export const DeleteCountry = ({postId}:{postId:string}) => {
    return httpClient
        .delete(COUNTRIES_ENDPOINTS.DELETE_COUNTRY.replace(":postId",postId))
        .then((res)=>res.data)
}

export const UpdateCountry = ({postId,payload}:{postId:string,payload:UpdateCountrypayload}) => {
    return httpClient
        .put(COUNTRIES_ENDPOINTS.UPDATE_COUNTRY.replace(":postId",postId),payload)
        .then((res)=>res.data)
}

export const LikeCountryCard = ({postId,payload}:{postId:string;payload:LikeCountryPayload}) => {
    return httpClient
        .post(COUNTRIES_ENDPOINTS.LIKE_CARD.replace(":postId",postId),payload)
        .then((res)=>res.data)
}

export const UnlikeCountryCard = ({postId,payload}:{postId:string;payload:UnLikeCountryPayload}) => {
    return httpClient
        .post(COUNTRIES_ENDPOINTS.UNLIKE_CARD.replace(":postId",postId),payload)
        .then((res)=>res.data)
}

export const GetAllCard = () => {
    return httpClient
        .get<GetAllCardresponse>(COUNTRIES_ENDPOINTS.GET_ALL_CARD)
        .then((res)=>res.data)
}

export const GetOneCard = ({userId}:{userId:string}) => {
    return httpClient
        .get<GetOneCardRes>(COUNTRIES_ENDPOINTS.GET_ONE_CARD.replace(":userId",userId))
        .then((res)=>res.data)
}
