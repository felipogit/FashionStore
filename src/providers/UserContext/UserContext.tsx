import { createContext, useState, useEffect } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { SubmitHandler } from "react-hook-form"


interface IUserProviderProps {
    children: React.ReactNode;
}

interface IFormData {
    email: string;
    password: string;
}

interface IUser {
    accessToken: string;
    user: {
        id: number;
        name: string;
        email: string;
    }
}

interface IUserContext {
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    user: IUser | null;
    login: SubmitHandler<IFormData>;
    navigation: NavigateFunction;
    logout: () => void;

}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null)
    const navigation = useNavigate()

    const login: SubmitHandler<IFormData> = async (formData: IFormData) => {

        try {
            const { data } = await api.post("/login", formData)

            localStorage.setItem("@AcessToken", data.accessToken)
            localStorage.setItem("@User", JSON.stringify(data.user))
            navigation("/admin_welcome")
            setUser(data)
            toast.success("Usuário logado", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        } catch (error: any) {

            if (error.response.data == "Incorrect password") {

                toast.error("Senha incorreta", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            } else if (error.response.data == "Cannot find user") {

                toast.error("Usuário não encontrado", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        }
    }

    const logout = ()  => {
      localStorage.removeItem("@AcessToken")
      localStorage.removeItem("@User")

      toast.success("Saindo...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      
    }


    return (
        <UserContext.Provider value={{ user, setUser, login, navigation, logout }}>
            {children}
        </UserContext.Provider>
    )
}