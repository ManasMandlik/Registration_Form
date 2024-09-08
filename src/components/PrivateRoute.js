import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token');

  // If no token, redirect to login page
  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
