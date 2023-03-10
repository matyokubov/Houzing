import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Dashboard from "./Dashboard"
import { useContext } from "react"
import { ContextAPI } from "../../context"

const Profile = () => {
    const { token, setToken } = useContext(ContextAPI)
    let uniqueToken = localStorage.getItem("token")
    if(uniqueToken && uniqueToken!==token) setToken(uniqueToken)
    return (
        token ? (
            <Dashboard token={token}/>
        ) : (
            <div className="container">
                <SignIn/>
                <SignUp/>
            </div>
        )
    )
}

export default Profile;