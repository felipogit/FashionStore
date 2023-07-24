import { z } from "zod"

export const addNewProductFormSchema = z.object({
  name:z.string().nonempty("O nome do produto é obrigatório"),
  price:z.string().nonempty("O preço do produto é obrigatório"),
  image:z.string().nonempty("O URL da imagem do produto é obrigatório"),
  description:z.string().nonempty("A descrição do produto é obrigatório").min(3, "A descrição do produto deve ter pelo menos 3 caracteres"),
})

export type TAddNewProductForm = z.infer<typeof addNewProductFormSchema>