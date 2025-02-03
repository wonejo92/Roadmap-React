import {userCounter} from "../Hooks/index.js";
import {useMemo, useState} from "react";

const heavyStuff=(iterationNumbers=100)=>{
    for(let i=0;i<iterationNumbers;i++){
        console.log("Ahi Vamos...");
    }
    return `${iterationNumbers} Iteraciones Realizadas`;
}

export const MemoHook = () => {
    const {counter,increment}=userCounter(4000)
    const [show, setShow] = useState(true)
    const memorizedValue = useMemo(() => { heavyStuff(counter)

    }, [counter]);

  return(
      <>
          <h1>Counter <small>{counter}</small></h1>
          <hr/>
          {memorizedValue}
          <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
          <button className="btn btn-outline-primary"
          onClick={()=>setShow(!show)}>Show/Hide{JSON.stringify(show)}</button>

      </>
  )
}