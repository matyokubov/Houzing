import { useContext, useEffect } from "react"
import { ContextAPI } from "../context"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import { navbar } from "../util/navbar"

const Root = () => {
    const { setHousesList } = useContext(ContextAPI)
    const { REACT_APP_BASE_URL: url } = process.env
    useEffect(() => {
        fetch(`${url}houses/list`)
            .then((res) => res.json())
            .then((data) => setHousesList(data))
            .catch((err) => console.log("error", err))
    }, [])
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