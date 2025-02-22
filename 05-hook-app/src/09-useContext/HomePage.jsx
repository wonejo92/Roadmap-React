import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const HomePage = () => {
    const{user}=useContext(UserContext);
    console.log(user);
    return(
        <>
            <h1>Home <small>{user?.username}</small> </h1>
            <hr/>
            <pre aria-label="pre">
                {JSON.stringify(user,null, 3)}
            </pre>
        </>
    )
}