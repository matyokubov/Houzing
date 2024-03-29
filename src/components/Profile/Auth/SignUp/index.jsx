import { Form, Submit, Select } from "../style";
import { Input } from "./../../../Generic/extra.js"
import { useState } from "react";
import Loader from "react-js-loader";

const SignUp = () => {
    const [regData, setRegData] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const onChangeRegData = ({target}) => {
        setRegData({...regData, [target.name]: target.value})
    }
    const setRole = ({target}) => {
        setRegData({...regData, "roleIdSet": [target.value]})
    }
    const register = () => {
        console.log(regData, JSON.stringify(regData), regData.password === regData.rePassword, Object.values(regData).length === 6, Object.values(regData).every((i)=>i), regData.password);
        if(regData.password === regData.rePassword && Object.values(regData).length === 6 && Object.values(regData).every((i)=>i) && regData.password){
            fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(regData)
            })
                .then((data) => data.json())
                .then((res) => {
                    setIsLoading(false)
                    alert(res.message ? res.message : "Unknown error")
                    console.log("rthen");
                })
                .catch((error) => {
                    setIsLoading(false)
                    alert(!error.toString().includes("SyntaxError") ? `Error: ${JSON.stringify(error)}` : `Sent your verification link to ${regData.email}\n - Open link\n - Leave Sign in page and login`)
                    console.log("rcatch");
                })
        } else alert("All data in not filled")
        setIsLoading(true)
    }
    return (
        <Form>
            <h2>Registration</h2>
            <Input name="firstname" theme="classic" type="text" placeholder="First name" onChange={onChangeRegData}/>
            <Input name="lastname" theme="classic" type="text" placeholder="Last name" onChange={onChangeRegData}/>
            <Input name="email" theme="classic" type="text" placeholder="Email" onChange={onChangeRegData}/>
            <Select name="userRole" onChange={setRole}>
                <option value={null}>User role</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Select>
            <Input name="password_reg" theme="classic" type="password" placeholder="Password" onChange={onChangeRegData}/>
            <Input name="rePassword_reg" theme="classic" type="password" placeholder="Re-enter password" onChange={onChangeRegData}/>
            <Submit onClick={register}>Register</Submit>
            { isLoading && <Loader type="hourglass" bgColor={"var(--themeColor)"} title={"Sending Request..."} color={"var(--themeColor)"} size={100} /> }
        </Form>
    )
}

export default SignUp;