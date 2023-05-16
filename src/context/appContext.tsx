import { createContext, useMemo } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import { useConsumeApi } from '../hooks/useConsumeApi';

const useAppContext = createContext(null);

function AppContext({ children }) {
  const { AppleAuthentication, appleAuthentication, appleAuthAvailable, getCredentialState, logout, token } =
    useAuthentication();
  const { addExpense, addIncome, amount, error, listExpenses, listIncomes, loading } = useConsumeApi();

  const value = useMemo(
    () => ({
      AppleAuthentication,
      appleAuthentication,
      appleAuthAvailable,
      getCredentialState,
      logout,
      token,
      addExpense,
      addIncome,
      amount,
      error,
      listExpenses,
      listIncomes,
      loading,
    }),
    [
      AppleAuthentication,
      appleAuthentication,
      appleAuthAvailable,
      getCredentialState,
      logout,
      token,
      addExpense,
      addIncome,
      amount,
      error,
      listExpenses,
      listIncomes,
      loading,
    ],
  );

  return <useAppContext.Provider value={value}>{children}</useAppContext.Provider>;
}

export { AppContext, useAppContext };
