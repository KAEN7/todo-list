import React from "react";
import Category from "./Category";

function Nav({ viewCurrentCategoryTodoList }) {
  return (
    <nav>
      <Category viewCurrentCategoryTodoList={viewCurrentCategoryTodoList} />
    </nav>
  );
}

export default Nav;
