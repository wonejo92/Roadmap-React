import {memo} from "react";

export const Small = memo (({value}) => {
    console.log("Me volvi a Generar")
  return(
      <>
          <div><small>{value}</small></div>
      </>
  )
})