import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

// list 전체 스타일
const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  input {
    width: 100%;
    font-size: 19px;
    margin-top: 30px;
    &::placeholder {
      color: #adb5bd;
      text-align: center;
    }
  }
`;

// todolist 스타일
const TodolistBlock = styled.div`
  margin: 2;
  padding: 0;
`;

function List({ todos }) {
  return (
    <ListBlock>
      <div>완료한 일 3개</div>
      <TodolistBlock>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
      </TodolistBlock>
    </ListBlock>
  );
}

export default List;

// todos 배열에 들어있는 값들을 map으로 뿌려서 ListItem 컴포넌트에 전달함으로써 각각의 값들을 위치에 넣어줌
