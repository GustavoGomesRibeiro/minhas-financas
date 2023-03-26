import { createContext } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';

const useAppContext = createContext(null);
const authenticationContext = useAuthentication;

function AppContext ({children}) {
    return (
        <useAppContext.Provider value={{ authenticationContext }}>
            {children}
        </useAppContext.Provider>
    )
}

export {AppContext, useAppContext}
