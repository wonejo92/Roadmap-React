import {useState} from "react";

export const useForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm)

    // Creacion de una funcion que me permita modificar los campos del formulario
    const onInputChange = ({target}) => {
        const{name,value} = target;
        setFormState({
            ...formState, // Permite mantener los estados o los valores ya ingressados previante en el formulario sin modificar nada
            [name]:value //"Propiedades Computadas" [] Permite ideintifcar que campo se va modificar de manera automatica
        })
    }
    //Permite reiniciar el formulario al incial
    const onResetForm = () => {
        setFormState(initialForm)
    }

  return{
        ...formState,
      formState,
      onInputChange,
      onResetForm
  }
}