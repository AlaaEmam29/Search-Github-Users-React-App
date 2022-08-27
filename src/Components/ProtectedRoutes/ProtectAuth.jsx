import * as React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const ProtectAuth = () => {

     const {
    isAuthenticated,
      user,

    } = useAuth0();
const isUser = isAuthenticated && user ;
    return (
        isUser ? <Navigate to="/" /> : <Outlet /> 
    );
}
export default ProtectAuth;