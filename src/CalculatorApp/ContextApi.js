import React, { useEffect, useState } from "react";
import { Appearance } from 'react-native';



const ThemContext = React.createContext();

const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('')
    useEffect(() => {
        // const colorScheme = Appearance.getColorScheme();
        // console.log(colorScheme)
        const listner = Appearance.addChangeListener(colorTheme => {
            if (colorTheme.colorScheme === 'light') {
                setTheme('LIGHT')
            } else {
                setTheme('DARK')
            }

        })
        return () => {
            listner;
        }
    }, [])
    return (
        <ThemContext.Provider value={{ theme }}>
            {children}
        </ThemContext.Provider>
    )
}

export { ThemContext, AppProvider }