import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children, user }) => {
  if (!user || !user.isAdmin) {
    return <Navigate to="/admin-login" replace />; // Redirect to /admin-login
  }
  return children;
};

export default AdminRoute;