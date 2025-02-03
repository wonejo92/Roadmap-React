import PropTypes from "prop-types";
export const GifItem = ({title,url}) => {
return(
    <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
)
}
/* TAREA

1. Añadir PropTypes
    a. Title obligatorio
    b. Url Obligatorio
2. Evaluar SnapShot

 */
GifItem.propTypes = {
    title : PropTypes.string.isRequired ,
    url   : PropTypes.string.isRequired
}