//Children representa los componentes que podemos pasar los que necesitos puede ser 1 como 5 etc
import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

// const user={
//     id:123,
//     name:'Kevin Cordero',
//     email:'kevin@kevin.com',
// }

export const UserProvider = ({children}) => {
    // El componente UserProvider para que se tenga acceso se debe colocar en la parte mas alta de la aplicacion
    // en este caso se coloca en el MainApp cambiando el fragmento por el UserProvider

    const [user, setUser] = useState();

  return(
      <>
          {/*Dfinimos el Contexto*/}
          <UserContext.Provider value={{user,setUser}}>
              {children}
          </UserContext.Provider>
      </>
  )
}