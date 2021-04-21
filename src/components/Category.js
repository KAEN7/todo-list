import React, { useState, useCallback } from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 9px;
  button {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    border: 1px solid #ffc078;
    border-radius: 6px;
    background: #ffc078;
    font-size: 16px;
    cursor: pointer;
    &:active {
      border: none;
      outline: none;
    }
  }
  .categoryInput {
    margin-top: 20px;
  }
`;

function Category({ categorys, onCateInsert, onRemoveCategory }) {
  const [value, setValue] = useState("");

  const onSubmit = useCallback(
    (e) => {
      onCateInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onCateInsert, value]
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <FormBlock onSubmit={onSubmit}>
      <button>카테고리 추가</button>
      {categorys.map((item) => (
        <CategoryItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveCategory={onRemoveCategory}
        />
      ))}
      <input
        className="categoryInput"
        onChange={onChange}
        value={value}
        placeholder="카테고리를 입력해주세오"
      />
    </FormBlock>
  );
}

export default Category;
