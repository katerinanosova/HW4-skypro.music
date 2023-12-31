import { createContext } from "react"

export const userContext = createContext({
    user: null,
    setUser: () => {},
    token: null,
    setToken: () => {}
});