import React, {useContext} from "react"

export const RouterContext = React.createContext()
export const GlobalContext = React.createContext()

export function useRouter() {
    return useContext(RouterContext);
}

export function useGlobal() {
    return useContext(GlobalContext)
}
