import {useEffect} from "react";
import {useForm} from "../Hooks/useForm.js";

export const FormWithCustomHook = () => {
    const {formState,onInputChange,username,email,password,onResetForm}=useForm({
        username:'',
        email: '',
        password: ''
    })

    // const {username,email,password}=formState

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
          <h1>Form With Custom Hook</h1>
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

          <input type="password"
                 className="form-control mt-2"
                 placeholder="Password"
                 name="password"
                 value={password}
                 onChange={onInputChange}/>
          <button  onClick={onResetForm} className="btn btn-danger mt-2">Borrar</button>
      </>
  )
}