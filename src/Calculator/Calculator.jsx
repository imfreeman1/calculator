import { evaluate } from "mathjs";
import React, { useState } from "react";
import DisplayContainer from "./Display/DisplayContainer";
import ControlerContainer from "./Controler/ControlerContainer";
import { MainDiv, CalculatorDiv } from "../Style/CalculatorPresenter";

const Calculator = () => {
  const [number, setNumber] = useState(0);
  const [content, setContent] = useState([]);
  const [signCheck, setSignCheck] = useState(false);
  const [pointCheck, setPointCheck] = useState(true);
  const getNum = (e) => {
    const value = e.target.value;
    setContent(content.concat(value));
    setSignCheck(true);
  };

  const getSign = (e) => {
    if (content.length == 0) {
      return;
    }
    const value = e.target.value;
    if (signCheck) {
      switch (value) {
        case "=":
          setNumber(evaluate(content.join("").replace("X", "*")));
          // number가 rerendering 되어야만 최신화 됨. 아마 useEffect를 사용해서 rerender되기 전에 number를 최신화 시켜 사용할 수 있을 것 같음.
          break;
        case "+/-":
          setContent([content.join("") * -1]);
          break;
        case "%":
          setContent([content.join("") * 0.01]);
          break;
        case "←":
          setContent(content.slice(0, content.length - 1));
          break;
        default:
          setContent(content.concat(value));
      }
      setSignCheck(false);
    }
  };

  const getPoint = (e) => {
    const value = e.target.value;
    if (pointCheck) {
      if (content.length == 0) {
        setContent(["0."]);
      } else {
        setContent(content.concat(value));
      }
      setPointCheck(false);
    }
  };
  const contentClear = (e) => {
    setContent([]);
    setNumber(0);
  };

  return (
    <MainDiv>
      <CalculatorDiv>
        <DisplayContainer number={number} content={content} />
        <ControlerContainer
          getNum={getNum}
          getPoint={getPoint}
          getSign={getSign}
          contentClear={contentClear}
        />
      </CalculatorDiv>
    </MainDiv>
  );
};

export default Calculator;
