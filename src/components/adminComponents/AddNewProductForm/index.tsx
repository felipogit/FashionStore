import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../Input"
import { TAddNewProductForm, addNewProductFormSchema } from "./addNewProductFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ProductContext } from "../../../providers/ProductsContext/ProductsContex"
import { StyledAddNewProductForm } from "./styles"
import { ButtonStyled } from "../../../styles/Button"
import { TextArea } from "../TextArea"


export const AddNewProductForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<TAddNewProductForm>({
    resolver: zodResolver(addNewProductFormSchema)
  })

  const { submitAddNewProduct } = useContext(ProductContext)

  const submit: SubmitHandler<TAddNewProductForm> = (formData) => {
    submitAddNewProduct(formData)
  }

  return (
    <StyledAddNewProductForm onSubmit={handleSubmit(submit)}>
      <Input placeholder="NOME" error={errors.name} {...register("name")}/>
      <Input placeholder="PREÇO (R$)" error={errors.price} {...register("price")}/>
      <Input placeholder="IMAGEM (URL)" error={errors.image} {...register("image")}/>
      <TextArea placeholder="DESCRIÇÃO RESUMIDA" error={errors.description} {...register("description")}/>
      <ButtonStyled styleTypeButton="black" type="submit">{<img src="../../../src/assets/plusSign.svg" alt="Sinal de adição"/>} NOVO PRODUTO</ButtonStyled>
    </StyledAddNewProductForm>
  )
}