import {z} from "zod";

export const RegisterSchema = z.object({
    email:z.string().email(),
    userName:z.string().min(1),
    password:z.string().min(8)
})