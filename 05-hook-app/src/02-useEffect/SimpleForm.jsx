import {useState,useEffect} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'Wonejo',
        email: 'Wonejo@gmail.com',
    })
    const{username,email}=formState;
    // Creacion de una funcion que me permita modificar los campos del formulario
    const onInputChange = ({target}) => {
        const{name,value} = target;
        setFormState({
            ...formState, // Permite mantener los estados o los valores ya ingressados previante en el formulario sin modificar nada
            [name]:value //"Propiedades Computadas" [] Permite ideintifcar que campo se va modificar de manera automatica
        })
    }

    useEffect(()=>{
        //Esta a la escucha de los cambios en el formulario
        // console.log("UseEffect Called")
    },
        //Cuando las depencencias se coloca un [] vacio solo se ejecuta una sola vez cuando se renderiza el componente
        [])

    useEffect(()=>{
            // console.log("FormState Changed")
        },
        //Se ejecuta solo cuando el Formulario es modificado
        [formState])

    useEffect(()=>{
            // console.log("FormState Changed")
        },
        //Se ejecuta solo cuando el email del formulario cambie
        [email])

    useEffect(() => {

    }, []);

  return(
      <>
          <h1>Simple Form</h1>
          <hr/>
          <input type="text"
                 className="form-control"
                 placeholder="Username"
                 name="username"
                 value={username}
                 onChange={onInputChange}/>

          <input type="text"
                 className="form-control mt-2"
                 placeholder="Kevin@gmail.com"
                 name="email"
                 value={email}
                 onChange={onInputChange}/>
          {
              (username ==='Wonejo9') && <Message/>
          }
      </>
  )
}