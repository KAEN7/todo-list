import React, { useState } from "react";
import TodoListEntry from "./TodoListEntry";

function TodoList({
  updateTodoList,
  currentCategory,
  currentCategoryTodoList,
}) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleEnterEvent = (e) => {
    if (e.key === "Enter" && text) {
      updateTodoList(text);
      setText("");
    }
  };

  const handleBlurEvent = (e) => {
    if (text) {
      updateTodoList(text);
      setText("");
    }
  };

  return (
    <section>
      <div id="category-title">
        <h2>{currentCategory}</h2>
      </div>
      {currentCategoryTodoList.map((todo) => (
        <TodoListEntry key={todo.id} todo={todo} />
      ))}
      <div className="default-input">
        <label></label>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyPress={handleEnterEvent}
          onBlur={handleBlurEvent}
          placeholder="오늘의 할 일"
        />
      </div>
    </section>
  );
}

export default TodoList;
