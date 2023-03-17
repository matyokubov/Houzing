import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { Container, Main } from "./style"
import { LogoImg } from "../../util/navbar"
import { navbar } from "../../util/navbar"
import { Button } from "../Generic"
import Footer from "../Footer"
import { ContextAPI } from "../../context"
import { useContext } from "react"

const Navbar = () => {
    const navigate = useNavigate()
    const { token } = useContext(ContextAPI)
    return (
        <>
            <div id="head"></div>
            <Container>
                <Main className="container">
                    <img src={LogoImg} alt="houzing" onClick={() => navigate("/home")}/>
                    <div>
                        {
                            navbar.map(({title, path, hidden}, i) => {
                                return !hidden && <NavLink key={i} to={path} className={({isActive}) => isActive ? "active" : "notActive"}>{title}</NavLink>
                            })
                        }
                    </div>
                    <div>
                        <Button type={"dark"} on={() => navigate("/profile")}>{token ? "Profile" : "Login"}</Button>
                    </div>
                </Main>
            </Container>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Navbar