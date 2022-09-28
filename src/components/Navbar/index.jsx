import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { Container, Main } from "./style"
import { LogoImg } from "../../util/navbar"
import { navbar } from "../../util/navbar"
import { Button } from "../Generic"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
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
                        <Button type={"dark"} on={() => navigate("/signin")}>Login</Button>
                    </div>
                </Main>
            </Container>
            <Outlet/>
        </>
    )
}

export default Navbar