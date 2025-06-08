import {z} from "zod";

export const EditCardSchema = z.object({
    title:z.string(),
    company:z.string(),
    purchase:z.number(),
    lastDivident:z.number(),
    Industry:z.string(),
    marketCap:z.number(),
    imageUrl:z.string(),
})