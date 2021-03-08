import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

const ListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-height: 80px;
  max-height: 140px;
  margin-top: 15px;
  outline: 0.7px solid gray;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    background: gray;
    margin-bottom: 0;
  }

  .todo {
    font-size: 20px;
    margin-top: 10px;
    margin-left: 11px;
    display: flex;
  }
  .btnGroup {
    display: flex;
    align-items: center;
    margin: 1px;
    .check {
      display: none;
      transform: translateX(100%);
    }
    .checkbox {
      display: flex;
      transform: translateX(100%);
    }
    .delete {
      display: flex;
      margin: 3px;
      font-size: 24px;
      transform: translateX(150%);
      color: gray;
      &:hover {
        color: black;
      }
    }
  }
`;

function TodoList({ children }) {
  return (
    <ListBlock>
      <div className="todo">{children}</div>
      <div className="btnGroup">
        <GrCheckbox className="checkbox" />
        <GrCheckboxSelected className="check" />
        <RiDeleteBack2Fill className="delete" />
      </div>
    </ListBlock>
  );
}

export default TodoList;
