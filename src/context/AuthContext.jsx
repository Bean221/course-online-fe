import { createContext, useState } from 'react';
import { registerUser, fetchUserByEmail } from '../services/api'; // Đảm bảo import đúng

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const foundUser = await fetchUserByEmail(email, password);
    if (foundUser) {
      setUser(foundUser);
      return foundUser;
    }
    throw new Error('Invalid email or password');
  };

  const logout = () => setUser(null);

  const register = async (userData) => {
    const newUser = await registerUser(userData);
    setUser(newUser);
    return newUser;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};