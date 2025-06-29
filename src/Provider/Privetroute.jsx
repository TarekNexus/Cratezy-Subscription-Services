import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Spinner';

const Privetroute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location=useLocation()
   
    if(loading){
        return <Spinner></Spinner>
    }

    if(user&&user?.email){
        return children
    }
   return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default Privetroute;