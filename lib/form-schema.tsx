import { z } from 'zod'

export const formSchema = z.object({
  senderEmail: z.string().describe('Email').email({ message: 'Invalid email' }),
  message: z
    .string()
    .describe('Message')
    .min(1, 'Message can not be empty')
    .max(500, 'Message can only be 500 characters max'),
})

export type Form = z.infer<typeof formSchema>
