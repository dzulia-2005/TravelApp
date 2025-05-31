import {z} from "zod"

export const LoginSchema = z.object({
    userName:z.string(),
    password:z.string().min(8)
})