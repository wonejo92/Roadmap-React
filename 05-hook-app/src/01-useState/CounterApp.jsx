import {useState} from "react";

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    });

    const{counter1,counter2,counter3} = state;

    return(
      <>
          <h1>COUNTER: {counter1}</h1>
          <h1>COUNTER: {counter2}</h1>
          <h1>COUNTER: {counter3}</h1>
          <hr/>
          <button className="btn" onClick={()=>setCounter({
              ...state, //Permite Modificar en este caso solo counter1 y sumarle +1 y el resto de counter se mantienem. 
              counter1:counter1+1,
          })}>+1</button>
      </>
  )
}