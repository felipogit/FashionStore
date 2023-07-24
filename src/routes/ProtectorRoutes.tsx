import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../providers/UserContext/UserContext"

interface Prop {
    Invert: boolean;
}


export function ProtectorRoutes({ Invert }: Prop) {
    const { user } = useContext(UserContext)

    return user?.user ? <Outlet /> : <Navigate to="/login" />
}