import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { ContextAPI } from "./../../../../context"
import { Input } from "./../../../Generic/extra.js"
import { Form, Submit, Remember } from "./../style";
import Loader from "react-js-loader";

const SignIn = () => {
    const navigate = useNavigate()
    const { token, setToken } = useContext(ContextAPI)
    const email = useRef(null)
    const password = useRef(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const setTokenToStorage = (token) => {
        localStorage.setItem("token", token)
        setToken(token)
    }
    console.log("signin");
    const submit = () => {
        let request = email.current.value && password.current.value
        const reqData = {email: email.current.value, password: password.current.value}
        console.log(reqData);
        if (request) fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqData)
            })
            .then((data) => data.json())
            .then((res) => {
                if(res.authenticationToken){
                    console.log(res)
                    setIsLoading(false)
                    request && setTokenToStorage(res.authenticationToken)
                } else alert("Unknown error")
            })
            .catch((error) => alert(error.toString().includes("SyntaxError") ? `Email or password incorrect` : "Unknown error"))
        setIsLoading(true)
    }
    console.log("loading", isLoading);
    const forgot = () => {
        let email = prompt("Enter current email")
        email && fetch(`https://houzing-app.herokuapp.com/api/public/forgot-password?email=${email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((data) => data.json())
                .then((res) => {
                    console.log(res, JSON.stringify({email}));
                    alert(res.success ? res.message : "Unknown error")
                })
    }
    return (
        token ? navigate("/profile") : (
            <Form>
                <h2>Sign in</h2>
                <Input theme="classic" type="text" placeholder="Email" ref={email}/>
                <Input theme="classic" type="password" placeholder="Password" className="mb16" ref={password}/>
                <Remember>
                    <span className="check">
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </span>
                    <span className="forgot">
                        <span onClick={forgot}>Forgot</span>
                    </span>
                </Remember>
                <Submit onClick={submit}>Login</Submit>
                { isLoading && <Loader type="hourglass" bgColor={"var(--themeColor)"} title={"Getting Data..."} color={"var(--themeColor)"} size={100} /> }
            </Form>
        )
    )
}

export default SignIn;