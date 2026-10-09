import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router';

const Home = () => {
    const { user , isLoading } = useAuth();
    if (user && !isLoading) {
        return <Navigate to="/profile" replace />;
    }
  return (
    <div>Home</div>
  )
}

export default Home