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

  // ✅ Updated Login function
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login API response:", data);

      if (data && data.token && data.user) {
        const userWithToken = {
          ...data.user,
          token: data.token,
        };

        // ✅ Save token and user
        localStorage.setItem("realEstateUser", JSON.stringify(userWithToken));
        localStorage.setItem("token", data.token);

        // ✅ Update auth state
        setCurrentUser(userWithToken);
        setUserRole(data.user.role);
        setIsAuthenticated(true);

        return userWithToken;
      } else {
        throw new Error("Invalid user data returned from server");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error(error.message || "Login failed. Please try again.");
    }
  };

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

      localStorage.setItem("realEstateUser", JSON.stringify(user));
      setCurrentUser(user);
      setUserRole(user.role);
      setIsAuthenticated(true);

      return user;
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setUserRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem("realEstateUser");
    localStorage.removeItem("token"); // ✅ Clear token too
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
