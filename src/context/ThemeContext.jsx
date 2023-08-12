import { createContext, useEffect, useState } from "react";

export const GlobalThemeContext=createContext()

export const ThemeProvider = ({children}) => {

    const [darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem('darkMode')) )

    useEffect(()=>{
        localStorage.setItem('darkMode',JSON.stringify(darkMode) )
    },[darkMode])
    const toggleTheme=()=>{
        
        return setDarkMode(!darkMode)
    }

    
    return (
        <GlobalThemeContext.Provider value={{darkMode,setDarkMode,toggleTheme}}>
            {children}
        </GlobalThemeContext.Provider>
    )
}
