import { useForm } from "react-hook-form"
import { useContext } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/Input"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { FooterDefault } from "../../components/Footer"
import { ButtonStyled } from "../../styles/Button.ts"
import img from "../../assets/imgCover.svg"
import { StyledFormLogin, LoginPageTitle, StyleSection } from "./style"
import { TLoginFormValues, loginFormSchema } from "./LoginSchema"
import { UserContext } from "../../providers/UserContext/UserContext.tsx"


export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) })
  const { login, navigation } = useContext(UserContext)


  const registerPage = () => {

    navigation("/register")
  }

  return (
    <>
      <HeaderDefault onlyBrand={true} />
      <main>
        <StyleSection>
          <img src={img} alt="" />
          <StyledFormLogin onSubmit={handleSubmit(login)}>
            <LoginPageTitle>ENTRAR</LoginPageTitle>
            <Input error={errors.email} {...register("email")} placeholder="E-MAIl" type="email" />
            <Input error={errors.password} {...register("password")} placeholder="SENHA" type="password" />
            <div className="container">
              <ButtonStyled styleTypeButton="black">ACESSAR</ButtonStyled>
              <ButtonStyled styleTypeButton="white" onClick={() => registerPage()} type="button">CADASTRE-SE</ButtonStyled>
            </div>
          </StyledFormLogin>
        </StyleSection>
      </main>
      <FooterDefault />
    </>
  )
}

