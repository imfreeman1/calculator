import React from "react";
import Button from "../Button/ButtonContainer";
import PropTypes from "prop-types";
import { RadiusDiv } from "./ControlerPresenter";

const ControlerContainer = ({ contentClear, getNum, getPoint, getSign }) => {
  return (
    <div>
      <div>
        <Button onClick={contentClear} color="mediumGrey" text={"C"} />
        <Button onClick={getSign} color="mediumGrey" text={"+/-"} />
        <Button onClick={getSign} color="mediumGrey" text={"%"} />
        <Button onClick={getSign} color="lightOrange" text={"/"} />
      </div>
      <div>
        <Button onClick={getNum} text={"7"} />
        <Button onClick={getNum} text={"8"} />
        <Button onClick={getNum} text={"9"} />
        <Button onClick={getSign} color="lightOrange" text={"X"} />
      </div>
      <div>
        <Button onClick={getNum} text={"4"} />
        <Button onClick={getNum} text={"5"} />
        <Button onClick={getNum} text={"6"} />
        <Button onClick={getSign} color="lightOrange" text={"-"} />
      </div>
      <div>
        <Button onClick={getNum} text={"1"} />
        <Button onClick={getNum} text={"2"} />
        <Button onClick={getNum} text={"3"} />
        <Button onClick={getSign} color="lightOrange" text={"+"} />
      </div>
      <RadiusDiv>
        <Button onClick={getNum} text={"0"} />
        <Button onClick={getPoint} text={"."} />
        <Button onClick={getSign} text={"←"} />
        <Button onClick={getSign} color="mediumOrange" text={"="} />
      </RadiusDiv>
    </div>
  );
};

export default ControlerContainer;

ControlerContainer.propTypes = {
  getNum: PropTypes.func.isRequired,
  getPoint: PropTypes.func.isRequired,
  getSign: PropTypes.func.isRequired,
  contentClear: PropTypes.func.isRequired,
};
