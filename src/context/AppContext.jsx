import { createContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const value = useMemo(() => ({
    user,
    login,
    logout,
  }), [user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};