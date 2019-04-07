import React, {useContext} from "react"

export const RouterContext = React.createContext<any>(null)

export function useRouter() {
    return useContext(RouterContext);
}
