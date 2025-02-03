import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";
import {useForm} from "../Hooks/useForm.js";

export const LoginPage = () => {
    const {user,setUser}=useContext(UserContext); // Hacemos uso del hook useContext para obtener los datos y apuntamos al UserContext y asi poder acceder a los datos compartidos

    //Definimos el formulario Inicial
    const{formState,onInputChange,username,email,password,onResetForm}=useForm({
        username:'',
        email: '',
        password: ''
    })
    return(
        <>
            <h1>Login</h1>
            <hr/>

            <pre aria-label="pre">
                {JSON.stringify(user, null, 3)}
            </pre>

            <input type="text"
                   className="form-control"
                   placeholder="Username"
                   name="username"
                   value={username}
                   onChange={onInputChange}/>


            <input type="Password"
                   className="form-control mt-2"
                   placeholder="Password"
                   name="password"
                   value={password}
                   onChange={onInputChange}/>


            <button
                className="btn btn-primary mt-2"
                onClick={() => setUser({
                    id: 123,
                    username: username,
                    password: password
                },alert("Successfully logged in"))}>
                Set User
            </button>
        </>
    )
}