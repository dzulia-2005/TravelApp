import { useMutation } from "@tanstack/react-query"
import { Login, LogOut, Refresh, Register } from "../../../api/auth"

export const useLogin = () => {
    return useMutation({
        mutationKey:["sign-in"],
        mutationFn:Login
    })
}

export const useRegister = () => {
    return useMutation({
        mutationKey:["sign-up"],
        mutationFn:Register
    })
}

export const useLogOut = () => {
    return useMutation({
        mutationKey:["sign-out"],
        mutationFn:LogOut
    })
}

export const useRefresh = () => {
    return useMutation({
        mutationKey:["refresh"],
        mutationFn:Refresh
    })
}