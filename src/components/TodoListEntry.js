import React, { useState } from "react";

function TodoListEntry({ todo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="todoList-input">
      <label></label>
      <input type="text" value={todo.text} onChange={handleChange} />
    </div>
  );
}

export default TodoListEntry;
