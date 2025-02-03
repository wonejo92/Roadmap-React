import {useEffect} from "react";

export const Message = () => {

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords);
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            console.log("Cleaning up event listener"); // Confirmar que se está llamando la limpieza
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);


  return(
      <>
          <h3>Usuario ya existe</h3>
      </>
  )
}