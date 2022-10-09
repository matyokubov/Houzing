import { Routes, Route, Navigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import { navbar } from "../util/navbar"

const Root = () => {
    console.log("the root")
    return (
        <div>
            <Routes>
                <Route element={<Navbar/>}>
                    {navbar.map(({id, element, path}) => {
                        return <Route key={id} path={path} element={element}/>
                    })}
                    <Route path="*" element={<h1>404 ERROR</h1>}/>
                </Route>
                <Route path="/" element={<Navigate to={"/home"}/>}/>
            </Routes>
        </div>
    )
}

export default Root