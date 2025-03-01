import { useQuery } from "@tanstack/react-query"
import { Me } from "../../../api/auth"

export const useMe = () => {
    return useQuery({
        queryKey:["me"],
        queryFn:Me
    })
}