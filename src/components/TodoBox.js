import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const BoxBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  padding-bottom: 30px;
  position: relative;
`;

function TodoBox() {
  return (
    <BoxBlock>
      <TodoList children="TEST" />
      <TodoList children="TEST" />
    </BoxBlock>
  );
}

export default TodoBox;
