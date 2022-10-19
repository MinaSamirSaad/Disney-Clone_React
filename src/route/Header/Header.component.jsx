import { Outlet } from 'react-router-dom'
import { HeaderContainer, Login, Logo } from './Header.styles'
import headerLogo from "../../assets/images/logo.svg"
import HeaderMenu from '../../components/Header-menu/HeaderMenu.component'
const Header =()=>{
    return(
        <>
        <HeaderContainer>
            <Logo>
                <img src={headerLogo} alt=""/>
            </Logo>
            <HeaderMenu/>
            <Login>Login</Login>
        </HeaderContainer>
        <Outlet/>
        </>
    )
}

export default Header