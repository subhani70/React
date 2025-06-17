import React, { createContext, useState } from 'react';

//step 1 create mycontext using createContext() ;
export const mycontext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme=="light"?"dark":"light");
    };

    return (
        <mycontext.Provider value={{ theme, toggleTheme }}>
            {children}
        </mycontext.Provider>
    );
};

export default ThemeProvider;