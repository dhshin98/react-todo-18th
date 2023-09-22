import React from "react";
import Button from "../utils/Button";
import styled from "styled-components";

const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 1.5rem;
  font-family: "SUITE-Regular", sans-serif; // 폰트 지정
`;

const ButtonContainer = styled.div`
  display: flex;
`;

function TodoItem({ item, index, moveBtn, deleteBtn, isDone }) {
  return (
    <TodoItemWrapper>
      {item}
      <ButtonContainer>
        <Button
          onClick={() => moveBtn(index, isDone)}
          text={isDone ? "⬆" : "⬇"}
          backgroundColor="#6aafe6"
          textColor="white"
          buttonSize="small"
        />
        <Button
          onClick={() => deleteBtn(index, isDone)}
          text="x"
          backgroundColor="red"
          textColor="white"
          buttonSize="small"
        />
      </ButtonContainer>
    </TodoItemWrapper>
  );
}

export default TodoItem;
