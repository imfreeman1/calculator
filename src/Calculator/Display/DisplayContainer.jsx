import React from "react";
import PropTypes from "prop-types";
import {
  NowState,
  NowStateDiv,
  ReturnState,
  StateDiv,
} from "./DisplayPresenter";
const DisplayContainer = ({ content, number }) => {
  return (
    <StateDiv>
      <NowStateDiv>
        <NowState>{content}</NowState>
      </NowStateDiv>
      <br />
      <ReturnState>{number}</ReturnState>
    </StateDiv>
  );
};

export default DisplayContainer;

DisplayContainer.propTypes = {
  content: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
