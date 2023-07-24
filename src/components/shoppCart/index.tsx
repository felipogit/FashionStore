import { useContext } from "react";
import { Modal } from "../Modal/index.tsx";
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx";
import { UlStyled } from "./styles.ts";
import { IProduct } from "../../providers/ProductsContext/@types.ts";
import image from "../../assets/buttonRemove.svg"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const ModalCart = () => {

  const { setisModal, listCart, setlistCart } = useContext(ProductContext)

  const value: number | undefined = listCart?.reduce((acc, item) => acc + item.price, 0)

  const removeItemCart = (id: number) => {
    if(listCart != null){
      const newList: IProduct[] = listCart.filter((product) => product.id != id)
      localStorage.setItem('@cartFashionStore', JSON.stringify(newList))
      setlistCart(newList)
      toast.error('Produto Removido!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <Modal title="CARINHO" styleModal="shoppingCart" setModalState={() => setisModal(false)}>
      <UlStyled>
        {listCart != null ? listCart.map((item) => (
          <li key={item.id}>
            <img className="image" src={item.image} />
            <div className="container">
              <div>
                <p className="name">{item.name}</p>
                <p className="price">{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
              </div>
              <button onClick={() => removeItemCart(item.id)}><img src={image} /></button>
            </div>
          </li>
        )) : null}
      </UlStyled>
      <p className="totalPrice">TOTAL <span className="totalPriceValue">{value === undefined ? "R$ 00,00" : value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></p>
    </Modal>
  )
}