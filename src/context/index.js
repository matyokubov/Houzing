import { createContext, useState } from "react";

export const ContextAPI = createContext()

export const Context = ({children}) => {
    const [ housesList, setHousesList ] = useState(
        {
            message: "Loading...",
            success: false,
            data: [],
            map: {
              size: 0,
              total_elements: 0,
              total_pages: 0
            }
        }
    )
    const [changingReq, setChangingReq] = useState(0)
    const [token, setToken] = useState(localStorage.getItem("token"))
    return (
        <ContextAPI.Provider value={{ housesList, setHousesList, changingReq, setChangingReq, token, setToken }}>
            {children}
        </ContextAPI.Provider>
    )
}