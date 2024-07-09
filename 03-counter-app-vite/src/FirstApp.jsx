import PropTypes from "prop-types";

export const FirstApp = ({title,subTitle,numbers}) => {
  return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subTitle}</p>
    <p>{subTitle}</p>
    <p>{numbers+10}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  numbers: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title:"Default Title",
  subTitle:"PropTypes",
  numbers:22,
  name: "KEVIN CORDERO"
}