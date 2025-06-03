import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch} from "../utils/reduxHooks.ts";
import {httpClient} from "../features";
import {logout, refresh} from "../features/auth/authThunks.ts";

export const useHttpInterceptor = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    useEffect(() => {
        const interceptor = httpClient.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                const refreshToken = localStorage.getItem("refreshToken");

                if(error.response.status === 401 && refreshToken && !originalRequest._retry){
                    originalRequest._retry = true;

                    try {
                        const data = await dispatch(refresh()).unwrap();

                        const newAccessToken = data.accessToken;
                        localStorage.setItem("accessToken",newAccessToken);

                        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

                        return originalRequest;
                    }catch (error) {
                        dispatch(logout());
                        navigate("/login");
                        return Promise.reject(error);
                    }
                }
                return Promise.reject(error);
            }
        );
        return () => {
            httpClient.interceptors.response.eject(interceptor);
        };
    }, [dispatch,navigate]);
}

