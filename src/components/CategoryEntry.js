import React, { useState } from "react";

function CategoryEntry({ categoryNew, viewCurrentCategoryTodoList }) {
  const [category, setCategory] = useState({
    category: "",
    isEditable: true,
  });

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleDoubleClick = (e) => {
    setCategory({ isEditable: false });
  };

  const handleClick = (e) => {
    viewCurrentCategoryTodoList(e.target.value);
  };

  return (
    <div className="category-entry">
      <label></label>
      <input
        type="text"
        value={categoryNew}
        onChange={handleChange}
        onDoubleClick={handleDoubleClick}
        onClick={handleClick}
      />
    </div>
  );
}

export default CategoryEntry;
