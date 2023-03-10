import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAPI } from "../../../context";

const Dashboard = ({token}) => {
    const { setToken } = useContext(ContextAPI)
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem("token")
        setToken(null)
        navigate("/home")
    }
    return (
        <div>
            <p>token: {token}</p>
            <h1>Dashboard page</h1>
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}

export default Dashboard;