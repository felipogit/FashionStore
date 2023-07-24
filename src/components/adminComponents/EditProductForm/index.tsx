import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { Input } from "../../Input"
import { editProductFormSchema, TeditProductFormSchema } from "./editProductSchema"
import { ProductContext } from "../../../providers/ProductsContext/ProductsContex"
import { IProduct } from "../../../providers/ProductsContext/@types"
import { StyledAddNewProductForm } from "../AddNewProductForm/styles"
import { ButtonStyled } from "../../../styles/Button"
import { TextArea } from "../TextArea"


interface IEditProductFormProps {
  product: IProduct | null;
}

export const EditProductForm = ( { product }: IEditProductFormProps) => {
  const { register, handleSubmit, formState: { errors }} = useForm<TeditProductFormSchema>({
    resolver: zodResolver(editProductFormSchema), 
    defaultValues: {
      name: product?.name || "",
      price: product?.price?.toString() || "",
      image: product?.image || "",
      description: product?.description || "",
    },
  })
  
  const { submitEditProduct } = useContext(ProductContext)

  const submit: SubmitHandler<TeditProductFormSchema> = (formData) => {
    if(product && product.id){
      submitEditProduct(formData, product.id.toString())
    }
  }


  return(
    <StyledAddNewProductForm onSubmit={handleSubmit(submit)}> 
      <Input placeholder="NOME" error={errors.name} {...register("name")}/>
      <Input placeholder="PREÇO (R$)" error={errors.price} {...register("price")} />
      <Input placeholder="IMAGEM (URL)" error={errors.image} {...register("image")} />
      <TextArea placeholder="DESCRIÇÃO RESUMIDA" error={errors.description} {...register("description")}/>   
      <ButtonStyled styleTypeButton="black" type="submit"> {<img src="../../src/assets/editSign.png" alt="Botão para confirmar edição do produto"/>}EDITAR PRODUTO</ButtonStyled>
    </StyledAddNewProductForm>
  )
}