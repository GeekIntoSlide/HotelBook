import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
import {useAuthStatus} from "./hooks/useAuthStatus";

export default function PrivateRoute() {
    const {loggedIn,loading}=useAuthStatus();
    if(loading){
        return(<h3>loading</h3>)
    }
  return loggedIn?<Outlet/>:<Navigate to="/sign-in"/>
}
