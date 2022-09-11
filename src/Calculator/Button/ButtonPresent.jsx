import { darken } from "polished";
import styled, { css } from "styled-components";

const StyledBtn = styled.button`
  padding: 8px 16px;
  width: 60px;
  height: 50px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  ${(props) => {
    const selectedColor = props.theme.Colors[props.color];
    return css`
      background-color: ${selectedColor};
      &:hover {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;

export { StyledBtn };
