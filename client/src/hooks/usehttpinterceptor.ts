import { useNavigate } from "react-router-dom";
import { useRefresh } from "../react-query/mutation/auth";
import { useEffect } from "react";
import { httpClient } from "../api";
import { SigninSuccess } from "../pages/auth/login/utils";
import { queryClient } from "../main";

export const useHttpInterceptor = () => {
    const navigate = useNavigate();
    const { mutate:handleRefresh } = useRefresh();

    useEffect(()=>{
        const interceptor = httpClient.interceptors.response.use(
            (res)=>{
                return res
            },
            (error)=>{
                const refreshToken = localStorage.getItem("accessToken");

                if (error.response?.status === 401 && refreshToken) {
                    return new Promise((resolve,reject)=>{
                        handleRefresh(
                            { payload: { refreshToken : refreshToken } },
                            {
                                onSuccess: (res) => {
                                    SigninSuccess({
                                        accessToken:res.accessToken,
                                        refreshToken:res.refreshToken
                                    });

                                    error.config.headers["Authorization"] = `Bearer ${res.accessToken}`
                                    resolve(httpClient(error.config))
                                },
                                onError: () => {
                                    localStorage.removeItem("refreshToken");
                                    localStorage.removeItem("accessToken");
                                    queryClient.clear();
                                    navigate("/")
                                    reject(error);
                                }
                            }
                        )
                    })
                }
                if (error.response?.status) {
                    navigate("/")
                }

                return Promise.reject(error);
            }
        )

        return () => {
            httpClient.interceptors.response.eject(interceptor)
        }
    },[handleRefresh,navigate])
}