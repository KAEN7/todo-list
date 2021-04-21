import React from "react";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

const ItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  font-size: 0.9rem;
`;

const Remove = styled.div`
  color: white;
  display: flex;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  color: #ffc078;
  &:hover {
    color: #ffc078;
  }
`;

function CategoryItem({ key, id, text, onRemoveCategory }) {
  return (
    <ItemBlock>
      <div>{text}</div>
      <Remove onClick={() => onRemoveCategory(id)}>
        <TiDeleteOutline />
      </Remove>
    </ItemBlock>
  );
}

export default CategoryItem;
