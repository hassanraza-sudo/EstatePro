import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate checking for a stored user session
  useEffect(() => {
    const storedUser = localStorage.getItem('realEstateUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setUserRole(user.role);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock authentication - in a real app, you would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock user data based on email for different roles
        if (email.includes('admin')) {
          const user = { id: 1, name: 'Admin User', email, role: 'admin' };
          setCurrentUser(user);
          setUserRole('admin');
          setIsAuthenticated(true);
          localStorage.setItem('realEstateUser', JSON.stringify(user));
          resolve(user);
        } else if (email.includes('agent')) {
          const user = { id: 2, name: 'Agent User', email, role: 'agent' };
          setCurrentUser(user);
          setUserRole('agent');
          setIsAuthenticated(true);
          localStorage.setItem('realEstateUser', JSON.stringify(user));
          resolve(user);
        } else if (email.includes('landlord')) {
          const user = { id: 3, name: 'Landlord User', email, role: 'landlord' };
          setCurrentUser(user);
          setUserRole('landlord');
          setIsAuthenticated(true);
          localStorage.setItem('realEstateUser', JSON.stringify(user));
          resolve(user);
        } else if (email.includes('buyer') || email.includes('tenant')) {
          const user = { id: 4, name: 'Buyer User', email, role: 'buyer' };
          setCurrentUser(user);
          setUserRole('buyer');
          setIsAuthenticated(true);
          localStorage.setItem('realEstateUser', JSON.stringify(user));
          resolve(user);
        } else {
          // Default to buyer role for this demo
          const user = { id: 5, name: 'User', email, role: 'buyer' };
          setCurrentUser(user);
          setUserRole('buyer');
          setIsAuthenticated(true);
          localStorage.setItem('realEstateUser', JSON.stringify(user));
          resolve(user);
        }
      }, 1000);
    });
  };

  const register = (name, email, password, role) => {
    // Mock registration - in a real app, you would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: Date.now(), name, email, role };
        setCurrentUser(user);
        setUserRole(role);
        setIsAuthenticated(true);
        localStorage.setItem('realEstateUser', JSON.stringify(user));
        resolve(user);
      }, 1000);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    setUserRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem('realEstateUser');
  };

  const value = {
    currentUser,
    userRole,
    isAuthenticated,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};