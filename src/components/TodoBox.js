import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const BoxBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

function TodoBox() {
  return (
    <BoxBlock>
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
    </BoxBlock>
  );
}

export default TodoBox;
