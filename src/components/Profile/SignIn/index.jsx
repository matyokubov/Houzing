import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { ContextAPI } from "../../../context"

const SignIn = () => {
    const navigate = useNavigate()
    const { token, setToken } = useContext(ContextAPI)
    const email = useRef(null)
    const password = useRef(null)
    const setTokenToStorage = (token) => {
        localStorage.setItem("token", token)
        setToken(token)
    }
    console.log("signin");
    const submit = () => {
        let request = email.current.value && password.current.value
        let token = "testing"
        console.log(request);
        request && setTokenToStorage(token)
    }
    return (
        token ? navigate("/profile") : (
            <div className="container">
                <input type="text" ref={email} placeholder="Enter your Email address"/>
                <input type="password" ref={password} placeholder="Enter your Password"/>
                <button onClick={submit}>Submit</button>
            </div>
        )
    )
}

export default SignIn;