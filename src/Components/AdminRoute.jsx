import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children, user }) => {
  // Suppose user object has a property 'isAdmin'
  if (!user || !user.isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AdminRoute;
