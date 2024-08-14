import {z} from 'zod';

export const MessagesSchema = z.object({
    content: z.string()
    .min(10, "content must be at least 10 characters")
    .max(300, "content must be no longer than 300 characters")
})
