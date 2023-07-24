import { createContext, useState, useEffect } from "react"
import { api } from "../../services/api"
import { IProduct, IProductProviderProps, IProductContextValue } from "./@types"
import { TAddNewProductForm } from "../../components/adminComponents/AddNewProductForm/addNewProductFormSchema"
import { TeditProductFormSchema } from "../../components/adminComponents/EditProductForm/editProductSchema"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


export const ProductContext = createContext({} as IProductContextValue)
 
export const ProductsProvider = ({ children }:IProductProviderProps) => {
  const [ isModalNewProductOpen, setIsModalNewProductsOpen ] = useState(false)

  const [isModalEditProduct, setisModalEditProduct] = useState(false)

  const [isModal, setisModal] = useState(false)

  const [productList, setProductList] = useState<IProduct[] | null>(null)

  const [ currentProduct, setCurrentProduct ] = useState<IProduct | null>(null)

  const [ listCart, setlistCart ] = useState<IProduct[] | null>(null)

  useEffect(() => {       
    const loadProducts = async () => {
      try {
        const { data } = await api.get('/products')

        setProductList(data)

      } catch (error) {
        console.log(error)

      } finally {
        // setLoading(false)
      }
    }
    loadProducts()

  }, [])

  const removeProduct = async (itemId: number) => {
    const token = localStorage.getItem("@AcessToken")

    if (productList !== null) {
      try {
        api.delete(`/products/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const updatedProductList = productList.filter((item) => item.id !== itemId)

        setProductList(updatedProductList)

        toast.success("Produto removido com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      })

      } catch (error) {

        toast.error("Ups, houve um problema, tente novamente", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        console.log(error)
      }
    }
  }

  const submitAddNewProduct = async (formData: TAddNewProductForm): Promise<void> => {
    const token = localStorage.getItem("@AcessToken") || ""

    const price = parseFloat(formData.price)

    try {
      const { data } = await api.post("/products", {
        ...formData, price: price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const updatedProductList = productList ? [...productList, data] : null
      setProductList(updatedProductList)
      setIsModalNewProductsOpen(false)

      toast.success("Produto adicionado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })

    } catch (error) {
      toast.error("Ups, houve um problema, tente novamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

      console.log(error)
      setIsModalNewProductsOpen(false)
    }
  }

  const submitEditProduct = async (formData: TeditProductFormSchema, productId: string) => {
    console.log(formData)
    const token = localStorage.getItem("@AcessToken")

    const price = parseFloat(formData.price)

    try {
      const { data } = await api.put(`/products/${productId}`, {
        ...formData, price: price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (productList) {
        const productIndex = productList.findIndex(product => product.id.toString() === productId)
        if (productIndex !== -1) {
          const updatedProductList = [...productList]
          updatedProductList[productIndex] = data
          setProductList(updatedProductList)
        }
      }

      toast.success("Produto editado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })

    } catch (error) {

      toast.error("Ups, houve um problema, tente novamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

      console.log(error)
    }

    setisModalEditProduct(false)
  }

  return (
    <ProductContext.Provider value={{ isModal, setisModal, listCart, setlistCart, productList, currentProduct, setCurrentProduct, removeProduct, isModalNewProductOpen, setIsModalNewProductsOpen, submitAddNewProduct, submitEditProduct, isModalEditProduct, setisModalEditProduct}}>
      { children }
    </ProductContext.Provider>
  )
}