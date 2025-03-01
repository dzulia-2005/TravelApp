import { Loginpayload, MEresponse, Refreshpayload, Registerpayload } from "./index.types";
import {httpClient} from "../index" 
import { AUTH_ENDPOINT } from "./index.enum";


export const Login = ({payload}:Loginpayload) => {
    return httpClient
        .post(AUTH_ENDPOINT.LOGIN,payload)
        .then((res)=>res.data)
}

export const Register = ({payload}:Registerpayload) => {
    return httpClient
        .post(AUTH_ENDPOINT.REGISTER,payload)
        .then((res)=>res.data)
}

export const LogOut = () => {
    return httpClient
        .post(AUTH_ENDPOINT.LOGOUT)
        .then((res)=>res.data)
}

export const Refresh = ({payload}:Refreshpayload) => {
    return httpClient
        .post(AUTH_ENDPOINT.REFFRESH,payload)
        .then((res)=>res.data)
}

export const Me = () => {
    return httpClient
        .get<MEresponse>(AUTH_ENDPOINT.ME)
        .then((res)=>res.data)
}