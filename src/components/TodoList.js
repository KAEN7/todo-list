import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

const ListBlock = styled.div`
  position: relative;
  width: 90%;
  min-height: 80px;
  max-height: 140px;
  margin-top: 15px;
  outline: 0.7px solid gray;
`;

function TodoList({ children }) {
  return (
    <ListBlock>
      <div>{children}</div>
      <GrCheckbox />
      <GrCheckboxSelected />
      <TiDelete />
    </ListBlock>
  );
}

export default TodoList;
