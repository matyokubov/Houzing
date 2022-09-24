import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import { navbar } from "../util/navbar"

const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar/>}>
                        {navbar.map(({id, element, path}) => {
                            return <Route key={id} path={path} element={element}/>
                        })}
                    </Route>
                    <Route path="/" element={<Navigate to={"/home"}/>}/>
                    <Route path="*" element={<h1>404 ERROR</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Root