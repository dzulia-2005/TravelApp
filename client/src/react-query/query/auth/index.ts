import {EndpointBuilder} from "@reduxjs/toolkit/query";
import {MeResponse} from "../../../features/auth/authTypes.ts";
import {AuthEndpoint} from "../../../features/auth/authEnum.ts";

export const me = (builder:EndpointBuilder<any, any, any>) => {
    return builder.query<MeResponse,void>({
        query : () => AuthEndpoint.ME,
        providesTags : ["auth"]
    });
}