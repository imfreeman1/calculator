import styled from "styled-components";

const StateDiv = styled.div`
  background-color: #36516d;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  text-align: end;
  padding: 0px 16px;
  padding-top: 8px;
`;
const NowStateDiv = styled.div`
  height: auto;
  min-height: 28px;
  padding-top: 16px;
  width: 100%;
`;

const NowState = styled.h1`
  font-size: 28px;
  color: gray;
  width: 100%;
  word-break: break-all;
`;

const ReturnState = styled.h1`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

export { StateDiv, NowStateDiv, NowState, ReturnState };
