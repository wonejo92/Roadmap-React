import {useContext} from "react";
import {AuthContext} from "../Auth/index.js";
import {Navigate} from "react-router";

export const PublicRoute = ({ children }) => {
    const {logged}=useContext(AuthContext);

    return(!logged)
        ? children : <Navigate to="/marvel"/>
}