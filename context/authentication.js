import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export default function Provider({ children }) {
    const [token, setTokenValue] = useState("");

    const setToken = (t) => {
        console.log({ tok: t });
        setTokenValue(t);
    }

    return (
        <AuthenticationContext.Provider value={{ token, setToken }}>
            {children}
        </AuthenticationContext.Provider>
    );
}