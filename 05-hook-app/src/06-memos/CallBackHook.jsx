import {userCounter} from "../Hooks/index.js";
import {useCallback, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.jsx";



// UseCallBack Sirve para memorizar funcionaes
// Los objetos siempre apuntan a espacios de memoria diferentes.

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        ()=>{
            setCounter((value)=> value + 1)
        },[]
    )

    // const incrementFather=()=>{
    //     setCounter(counter + 1)
    // }
  return(
      <>
          <h1>Use CallBack Hook {counter}</h1>
          <hr/>
          <ShowIncrement increment={incrementFather}/>
      </>
  )
}