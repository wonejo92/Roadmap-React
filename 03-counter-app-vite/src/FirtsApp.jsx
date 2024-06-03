import PropTypes from "prop-types";

export const FirtsApp = ({title,subTitle,numbers}) => {
  return (
    <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    <p>{numbers+10}</p>
    </>
  )
}

FirtsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  numbers: PropTypes.number.isRequired
}

FirtsApp.defaultProps = {
  title:"Default Title",
  subTitle:"PropTypes",
  numbers:22,
  name: "KEVIN CORDERO"
}