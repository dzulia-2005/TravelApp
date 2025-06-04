import  axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useRefreshMutation} from "../features/auth/authApi.ts";

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL
});


export const useHttpInterceptor = () => {
    const navigate = useNavigate();
    const [refresh] = useRefreshMutation();

    useEffect(() => {
        const interceptor =
    }, []);
}


