import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../baseQuery.ts";
import {me} from "../../react-query/query/auth";
import {login, logout, refresh, register} from "../../react-query/mutation/auth";

export const authApi = createApi({
    reducerPath : 'authApi',
    baseQuery : baseQuery,
    tagTypes : ['auth'],
    endpoints : (builder) => ({
        register : register(builder),
        login : login(builder),
        me : me(builder),
        refresh : refresh(builder),
        logout : logout(builder),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useMeQuery,
    useRefreshMutation,
    useLogoutMutation,
} = authApi;