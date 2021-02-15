import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBLock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBLock>
      <TodoItem text="프로젝트샘플" done={true} />
      <TodoItem text="프로젝트샘플" done={true} />
      <TodoItem text="프로젝트샘플" done={false} />
      <TodoItem text="프로젝트샘플" done={true} />
      <TodoItem text="프로젝트샘플" done={false} />
    </TodoListBLock>
  );
}

export default TodoList;
