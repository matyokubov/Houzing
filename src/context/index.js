import { createContext, useState } from "react";

export const ContextAPI = createContext()

export const Context = ({children}) => {
    const [ housesList, setHousesList ] = useState(null)
    return (
        <ContextAPI.Provider value={{ housesList, setHousesList }}>
            {children}
        </ContextAPI.Provider>
    )
}