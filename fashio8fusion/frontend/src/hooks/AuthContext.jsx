import React, { createContext, useContext, useEffect, useState } from 'react';
import { login } from '../services/authService';
// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to access the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state (null when not logged in)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  }, []);

  // Function to log in the user
  const loginUser = async (email, password) => {
    try {
      const data = await login(email, password);
      console.log('in auth context', data);
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      window.location.reload();
      window.location.href = '/login';

      setUser(data); // Assuming the response contains token, email, and name
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Function to log out the user (you can implement this)
  const logoutUser = () => {
    // Implement your logout logic here
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    window.location.reload();
  };

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  // Check if the user is already authenticated (e.g., on page reload)
  useEffect(() => {
    // Implement your check here (e.g., check localStorage for a token)
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        isAuthenticated,
        isLoading,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
