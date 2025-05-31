import axios,{CreateAxiosDefaults} from "axios";

const axiosConfig: CreateAxiosDefaults = {
    baseURL:"http://localhost:5183"
};

export const httpClient = axios.create(axiosConfig);

export const setAuthorizationHeader = (accessToken:string) => {
    httpClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}