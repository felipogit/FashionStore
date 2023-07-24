import { FooterStyled } from "../../components/Footer/styles"
import { TopSectionAdmin } from "../../components/adminComponents/TopSectionAdmin"
import { NavAdminBar } from "../../components/adminComponents/NavAdminBar"
import { HeaderDefault } from "../../components/Header"
import { StyledTopSectionContainer } from "../AdminDashboardPage/styles"

export const AdminDashboardWelcomePage = () => {
  const user = JSON.parse(localStorage.getItem("@User") || "")

  return (
    <>
      <HeaderDefault onlyBrand={true}/>   
      <NavAdminBar />
      <StyledTopSectionContainer>
        <TopSectionAdmin title="PAINEL DO ADMINISTRADOR" message={`Seja bem vindo, ${user ? user.name : null || ""}!`}/>
      </StyledTopSectionContainer>
      
      
      <FooterStyled>
        <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
      </FooterStyled>
    </>
  )
}