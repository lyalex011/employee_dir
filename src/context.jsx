import { useContext, createContext, useState } from "react";
import { data } from "./data";

export const FamilyContext = createContext()

export function useEmployee() {
    return useContext(FamilyContext)
}

export function FamilyProvider(props) {

    const [employees, setEmployees] = useState(data);

    const sharedValue = {
        employees, 
        setEmployees
    }

    return ( 
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
     );
}
