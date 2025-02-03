import {useNavigate} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../Context/index.js";

export const LoginPage = () => {
    const navigate =useNavigate()
    const {login}=useContext(AuthContext)
    const onLogin=()=>{
        const lastPath=localStorage.getItem("lastPath")
        console.log(lastPath)
        login('Wonejo92')

        navigate(lastPath,{replace:true})
    }
    return(
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={onLogin}
            >Login</button>
        </div>
    )
}