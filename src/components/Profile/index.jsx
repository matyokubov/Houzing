import SignIn from "./Auth/SignIn"
import SignUp from "./Auth/SignUp"
import Dashboard from "./Dashboard"
import { useContext, useState } from "react"
import { ContextAPI } from "../../context"
import "./index.css"

const Profile = () => {
    const { token, setToken } = useContext(ContextAPI)
    let uniqueToken = localStorage.getItem("token")
    const [ mode, setMode ] = useState("login")
    const show = (mode) => setMode(mode)
    if(uniqueToken && uniqueToken!==token) setToken(uniqueToken)
    return (
        token ? (
            <Dashboard token={token}/>
        ) : (
            <div className="container _container">
                {
                    mode === "reg" ? <>
                        <SignUp/>
                        <span id="navigateAnotherMode" onClick={() => show("login")}>I have registered!</span>
                    </> :
                    mode === "login" ? <>
                        <SignIn/>
                        <span id="navigateAnotherMode" onClick={() => show("reg")}>Aren'n you a account?</span>
                    </> : <></>
                }
            </div>
        )
    )
}

export default Profile;