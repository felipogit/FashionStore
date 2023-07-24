import { HeaderStyled } from "./styles.ts"
import logo from "../../assets/FAshionSTORE.svg"
import cart from "../../assets/cart.svg"
import { useContext, useEffect } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { IProduct } from "../../providers/ProductsContext/@types.ts"

interface IProps {
    onlyBrand: boolean
}

export const HeaderDefault = ({ onlyBrand }: IProps) => {

    const { setisModal, setlistCart } = useContext(ProductContext)


    const openCart = () => {
        const storage = localStorage.getItem('@cartFashionStore')
        if (storage != null) {
            const newList: IProduct[] = JSON.parse(storage)
            if (newList != null) {
                setlistCart(newList)
            }
        }
        setisModal(true)
    }

    return (
        <HeaderStyled onlyBrand={onlyBrand}>
            <div>
                <img className="Logo" src={logo} alt="Logo fashion store" />
                {onlyBrand === true ? null : <img onClick={openCart} className="Cart" src={cart} alt="icone de carrinho" />}
            </div>
        </HeaderStyled>
    )
}