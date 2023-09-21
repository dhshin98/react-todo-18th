import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 2px;
  position: relative;
  border: none;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  font-family: "paybooc-Light", sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

function Button({ onClick, text, backgroundColor, textColor }) {
  return (
    <StyledButton
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {text}
    </StyledButton>
  );
}
export default Button;