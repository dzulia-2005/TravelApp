import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BaseQueryFn, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {AuthEndpoint} from "./auth/authEnum.ts";
import {SignInSuccess} from "../pages/auth/login/utils";

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});


export const customBaseQuery:BaseQueryFn<
    Parameters<typeof baseQuery>[0],
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args,api,extraOptions);

    if(result.error && result.error.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
            return result;
        }

        const refreshResult = await baseQuery(
            {
                url: AuthEndpoint.REFRESH,
                method: 'POST',
                body: {refreshToken}
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const {token: newAccessToken, refreshToken: newRefreshToken} =
                refreshResult.data as {
                    token: string;
                    refreshToken: string;
                };

            SignInSuccess({
                token: newAccessToken,
                refreshToken: newRefreshToken,
            });


            result = await baseQuery(args, api, extraOptions);
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
        }
    }

    return result;
};