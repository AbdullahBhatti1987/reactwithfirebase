import { createContext, useState } from 'react';


export const ThemeContext = createContext();

function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("dark")
    
    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider