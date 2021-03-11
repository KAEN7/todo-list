import React, { useState } from "react";
import CategoryEntry from "./CategoryEntry";

function Category({ viewCurrentCategoryTodoList }) {
  const [name, setName] = useState({
    text: "",
    categories: ["분류 안된 할 일"],
  });

  const handleChange = (e) => {
    setName({ text: e.target.value });
  };

  const updateCategory = (text) => {
    setName({
      categories: name.categories.concat(text),
    });
  };

  const handleEnterEvent = (e) => {
    if (e.key === "Enter" && name.text) {
      updateCategory(name.text);
      viewCurrentCategoryTodoList(name.text);
      setName({ text: "" });
    }
  };

  const handleBlurEvent = (e) => {
    if (name.text) {
      updateCategory(name.text);
      viewCurrentCategoryTodoList(name.text);
      setName({ text: "" });
    }
  };

  return (
    <div>
      <button>카테고리 추가</button>
      {name.categories.map((category) => (
        <CategoryEntry
          key={category}
          categoryNew={category}
          viewCurrentCategoryTodoList={viewCurrentCategoryTodoList}
        />
      ))}
      <div id="category-default-form">
        <label></label>
        <input
          type="text"
          id="category-default-input"
          value={name.text}
          onChange={handleChange}
          onKeyPress={handleEnterEvent}
          onBlur={handleBlurEvent}
        />
      </div>
    </div>
  );
}

export default Category;
