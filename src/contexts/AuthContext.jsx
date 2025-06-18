import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check for stored user session on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("realEstateUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setUserRole(user.role);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login API response:", data);

      if (data && data.email && data.role) {
        // Save to local storage
        localStorage.setItem("realEstateUser", JSON.stringify(data));

        // Update auth state
        setCurrentUser(data);
        setUserRole(data.role);
        setIsAuthenticated(true);

        return data;
      } else {
        throw new Error("Invalid user data returned from server");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error(error.message || "Login failed. Please try again.");
    }
  };

  // Register
  const register = async (name, email, password, role) => {
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to register");
      }

      const user = await res.json();

      // Save to local storage
      localStorage.setItem("realEstateUser", JSON.stringify(user));

      // Update auth state
      setCurrentUser(user);
      setUserRole(user.role);
      setIsAuthenticated(true);

      return user;
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error;
    }
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
    setUserRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem("realEstateUser");
  };

  const value = {
    currentUser,
    userRole,
    isAuthenticated,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
