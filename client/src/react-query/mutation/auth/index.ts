import {BaseQueryFn, EndpointBuilder, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {AuthResponse, loginPayload, refreshPayload, registerPayload} from "../../../features/auth/authTypes.ts";
import {AuthEndpoint} from "../../../features/auth/authEnum.ts";

export const register = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<AuthResponse,registerPayload>({
        query:(payload:registerPayload)=>({
            url:AuthEndpoint.REGISTER,
            method:'POST',
            body:payload
        }),
        invalidatesTags:["auth"]
    })
}

export const login = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<AuthResponse,loginPayload>({
        query:(payload:loginPayload) => ({
            url:AuthEndpoint.LOGIN,
            method:'POST',
            body:payload
        }),
        invalidatesTags:["auth"],
        async onQueryStarted(_, { queryFulfilled }) {
            try {
                const {data} = await queryFulfilled;
                console.log("response data:", data.token);
                localStorage.setItem("token",data.token);
                localStorage.setItem("refreshToken",data.refreshToken)
            } catch (e) {
                console.error("login Failed",e);
            }
        }
    })
}

export const refresh = (builder:EndpointBuilder<any, any, any>) => {
    return builder.mutation<AuthResponse,refreshPayload>({
        query:(payload:refreshPayload)=>({
            url:AuthEndpoint.REFRESH,
            method:'POST',
            body:payload
        }),
        invalidatesTags:["auth"]
    })
}

export const logout = (
    builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, "auth", "authApi">
) =>
    builder.mutation<void, void>({
        query: () => ({
            url: AuthEndpoint.LOGOUT,
            method: "POST",
        }),
        invalidatesTags:["auth"]
    });