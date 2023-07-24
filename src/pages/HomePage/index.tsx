import { useContext } from "react"
import { StyledProductList } from "../../styles/UlStyled.ts"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { ProductItem } from "../../components/ProductItem/index.tsx"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { FooterDefault } from "../../components/Footer/index.tsx"
import imgCover from "../../assets/imgCover.svg"
import { MainStyled } from "./styles.ts"
import { ModalCart } from "../../components/shoppCart/index.tsx"
import { ToastContainer } from 'react-toastify';
import { ButtonStyled } from "../../styles/Button.ts"

export const HomePage = () => {

  const { productList, isModal } = useContext(ProductContext)

  return (
    <>
      <HeaderDefault onlyBrand={false} />
      <MainStyled>
        <div className="containerHome">
          <img className="imgCover" src={imgCover} alt='' />
          <div>
            <h1 className="title">KENZIE<br />FASHION<br />STORE</h1>
            <ButtonStyled styleTypeButton="black" >CONFIRA AS OFERTAS</ButtonStyled>
          </div>
        </div>
        <h2>PRODUTOS EM DESTAQUE</h2>
        <StyledProductList styledDiv="otherPage" >
          {productList ? productList.map((product) => (<ProductItem key={product.id} item={product} />)) : null}
        </StyledProductList>
        {isModal ? <ModalCart /> : null}
      </MainStyled>
      <ToastContainer />
      <FooterDefault />
    </>
  )
}