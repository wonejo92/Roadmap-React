import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {AuthReducer} from "./AuthReducer.js";
import {types} from '../Types/types.js'

// const initialState = {
//     logged: false,
//     name: null
// }
const init=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    return{
        logged: !!user,
        user: user
    }
}
export const AuthProvider = ({ children }) => {
  const [AuthState,dispatch] =useReducer(AuthReducer, {},init)

    const onLogin = (name='') =>{

      const user={id:"ABC",name}

      const action={
          type: types.login,
          payload:user,
      }

      localStorage.setItem('user',JSON.stringify(user))
      dispatch(action)
    }

    const onLogout = () =>{
      localStorage.removeItem('user');
      const action={
          type: types.logout
      }
      dispatch(action)
    }
    return(
        <AuthContext.Provider value={{
            ...AuthState,
            login:onLogin,
            logout:onLogout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}