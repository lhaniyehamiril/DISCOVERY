import { createContext, useContext } from "react";
import { useState } from "react"

const CitiesContext = createContext()

const CitiesProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    return (
        <CitiesContext.Provider value={{
            cities,
            setCities
        }}>
            {children}
        </CitiesContext.Provider>
    )
}

const useCities = () => {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('CitiesContext was used outside of CitiesProvider')
    return context
}



export { CitiesProvider, useCities }