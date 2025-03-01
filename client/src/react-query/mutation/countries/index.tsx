import { useMutation } from "@tanstack/react-query"
import { CreateCountry, DeleteCountry, LikeCountryCard, UnlikeCountryCard, UpdateCountry } from "../../../api/countries"

export const useCreateCountryCard = () => {
    return useMutation({
        mutationKey:["create-country"],
        mutationFn:CreateCountry
    })
}

export const useDeleteCountryCard = () => {
    return useMutation({
        mutationKey:["delete-country"],
        mutationFn:DeleteCountry
    })
}

export const useUpdateDeleteCountry = () => {
    return useMutation({
        mutationKey:["update-country"],
        mutationFn:UpdateCountry
    })
}

export const useLikeCountry = () => {
    return useMutation({
        mutationKey:["like_countryCard"],
        mutationFn:LikeCountryCard
    })
}

export const useUnlikeCountry = () => {
    return useMutation({
        mutationKey:["unlike_countryCard"],
        mutationFn:UnlikeCountryCard
    })
}

