import React, { useState } from "react";
import CategoryEntry from "./CategoryEntry";

function Category() {
  const [name, setName] = useState({
    categoryNames: [],
  });

  return (
    <>
      <CategoryEntry />
    </>
  );
}

export default Category;
