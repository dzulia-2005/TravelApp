import { useQuery } from "@tanstack/react-query"
import { Me } from "../../../api/auth"
import { AuthorizationHeader } from "../../../api";

export const useMe = ({
    isEnabled,accessToken
}:{
    isEnabled:boolean;
    accessToken:string|null;
}) => {
    if(accessToken){
        AuthorizationHeader(`Bearer ${accessToken}`)
    }
    return useQuery({
        queryKey:["me"],
        queryFn:Me,
        enabled:isEnabled
    })
}