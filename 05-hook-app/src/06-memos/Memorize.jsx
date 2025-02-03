import {userCounter} from "../Hooks/index.js";
import {Small} from "./Small.jsx";
import {useState} from "react";

export const Memorize = () => {
    const {counter,increment}=userCounter(10)
    const [show, setShow] = useState(true)
  return(
      <>
          <h1>Counter <Small value={counter} /></h1>
          <hr/>
          <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
          <button className="btn btn-outline-primary"
          onClick={()=>setShow(!show)}>Show/Hide{JSON.stringify(show)}</button>

      </>
  )
}