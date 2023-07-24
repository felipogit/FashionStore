import { z } from "zod";


export const loginFormSchema = z.object({
    email: z.string().min(1, "O e-mail é obrigatório").email("O e-mail fornecido inválido"),
    password: z.string().min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
})

export type TLoginFormValues = z.infer<typeof loginFormSchema>