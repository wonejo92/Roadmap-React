export const ShowIncrement = ({increment}) => {
    console.log("Me volvi a Dibujar :(")
    return(
        <button
            className="btn btn-primary"
            onClick={increment}>Incrementar</button>
    )
}