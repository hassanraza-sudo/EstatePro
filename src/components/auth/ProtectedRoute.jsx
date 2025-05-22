import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, allowedRoles = [], children }) => {
  const location = useLocation();

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If no specific roles are required, allow access
  if (allowedRoles.length === 0) {
    return children;
  }
  
  // Check if user has required role (needs userRole from context)
  const { userRole } = children.props.children.props;
  
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

export default ProtectedRoute;