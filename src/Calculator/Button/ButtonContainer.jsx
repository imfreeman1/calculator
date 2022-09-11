import React from "react";
import PropTypes from "prop-types";
import { StyledBtn } from "./ButtonPresent";

const Button = (props) => {
  return (
    <StyledBtn onClick={props.onClick} value={props.text} color={props.color}>
      {props.text}
    </StyledBtn>
  );
};

export default Button;

Button.defaultProps = {
  color: "lightGrey",
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
