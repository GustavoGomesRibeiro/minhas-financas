import { createContext, useMemo } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';

const useAppContext = createContext(null);

function AppContext({ children }) {
  const { AppleAuthentication, appleAuthentication, appleAuthAvailable, getCredentialState, logout, token } =
    useAuthentication();

  const value = useMemo(
    () => ({
      AppleAuthentication,
      appleAuthentication,
      appleAuthAvailable,
      getCredentialState,
      logout,
      token,
    }),
    [AppleAuthentication, appleAuthentication, appleAuthAvailable, getCredentialState, logout, token],
  );

  return <useAppContext.Provider value={value}>{children}</useAppContext.Provider>;
}

export { AppContext, useAppContext };
