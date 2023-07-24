import { Link } from "react-router-dom"
import { StyledNavAdminBar } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext/UserContext"

export const NavAdminBar = () => {
  const { logout } = useContext(UserContext)

  return (
    <StyledNavAdminBar>
        <ul>
          <li>
            <Link to="/admin_welcome">
              Início
            </Link>
          </li>
          <li>
            <Link to="/admin_dashboard">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </StyledNavAdminBar>
  )
}