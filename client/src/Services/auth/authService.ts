import {jwtDecode} from "jwt-decode";
import {AuthResponse, MeResponse } from "../../features/auth/authTypes.ts";
import {httpClient} from "../../features";
import {AuthEnum} from "../../features/auth/authEnum.ts";

type JwtPayload = {
    nameId : string;
    email : string;
    given_name : string;
    exp:number;
    iat:number;
}

export const loginService = async ( email : string,password : string ) : Promise<AuthResponse> => {
    const response = await httpClient.post(AuthEnum.LOGIN,{email,password});
    const { token : accessToken , refreshToken } = response.data

    const decoded = jwtDecode<JwtPayload>(accessToken);
    const user : MeResponse = {
        id: decoded.nameId,
        email : decoded.email,
        userName  : decoded.given_name,
        stocks:[]
    };

    localStorage.setItem("accessToken",accessToken)
    localStorage.setItem("refreshToken",refreshToken)

    return {
        accessToken,
        refreshToken,
        user
    }

}

export const registerService = async ( email:string, password:string, username:string) : Promise<AuthResponse> => {
    const response = await httpClient.post(AuthEnum.REGISTER,{email,password,username})
    const { token : accessToken , refreshToken } = response.data;

    const decoded = jwtDecode<JwtPayload>(accessToken);
    const user : MeResponse = {
        id : decoded.nameId,
        email : decoded.email,
        userName : decoded.given_name,
        stocks : []
    };

    localStorage.setItem("accessToken",accessToken);
    localStorage.setItem("refreshToken",refreshToken);

    return {
        accessToken,
        refreshToken,
        user
    }
}


export const logoutService = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
}

export const refreshService = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if(!refreshToken){
        throw new Error("Refresh Token is not available");
    }

    const response = await httpClient.post(AuthEnum.REFRESH,{
        refreshToken
    });

    return handleAuthResponse(response.data);
}

export const getMeService = async ():Promise<MeResponse> => {
    const response = await httpClient.get<MeResponse>(AuthEnum.ME);
    return response.data
}

export const handleAuthResponse = (data : { token:string; refreshToken:string }):AuthResponse => {
    const { token:accessToken ,refreshToken } = data;
    const decoded =jwtDecode<JwtPayload>(accessToken);

    const user : MeResponse = {
        id:decoded.nameId,
        email:decoded.email,
        userName:decoded.given_name,
        stocks:[]
    };

    localStorage.setItem("accessToken",accessToken);
    localStorage.setItem("refreshToken",refreshToken);

    return {
        accessToken,
        refreshToken,
        user
    }
}