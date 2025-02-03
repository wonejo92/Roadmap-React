// Custom Hook
import {useState} from "react";

export const userCounter=(initialValue=10) =>{
    const [counter, setCounter] = useState(initialValue)
    // Exponer funciones y pasar a otros componentes
    const increment = (value=1) => {
        setCounter((current)=>current + value)
        // setCounter(counter + value)
    }
    const decrement = (value=1) => {
        if(counter <= 1){
            alert("Como minimo debe ser 1 Producto ")
        } else {
            setCounter(counter - value)
        }

    }
    const reset=()=>{
        setCounter(initialValue)
    }
    return{
        counter,increment,decrement,reset
    }
}