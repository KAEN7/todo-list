import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {
  return (
    <ul>
      {/* todos를 받아와서 일단 뿌려줌 */}
      {todos.map((todo) => (
        <TodoListItem key={todo} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
