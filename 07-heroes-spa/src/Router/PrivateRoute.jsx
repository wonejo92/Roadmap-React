import {useContext} from "react";
import {AuthContext} from "../Auth/index.js";
import {Navigate, useLocation} from "react-router";

export const PrivateRoute = ({children}) => {
    const {logged}=useContext(AuthContext);
    const {pathname,search}=useLocation()
    const laspath=pathname+search
    localStorage.setItem('lastPath',laspath)
    console.log('re-render')
    return(logged)
    ? children : <Navigate to="/login"/>
}