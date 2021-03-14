import React, { useState } from "react";
import styled from "styled-components";

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

const TodolistBlock = styled.div`
  margin: 2;
  padding: 0;
`;

const ListItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    margin-top: 5px;
  }
`;

function ListItem({ key, id, text, done }) {
  return (
    <ListItemBlock>
      <div>O</div>
      <div done={done}>{text}</div>
      <div>삭제</div>
    </ListItemBlock>
  );
}

function List() {
  const [todos, setTodos] = useState([
    {
      key: 0,
      id: 0,
      text: "",
      done: false,
    },
  ]);

  // 구조분해
  const { key, id, text, done } = todos;

  // FUNCTION
  const onChange = (e) => {
    const newTodo = {
      key: key + 1,
      id: id + 1,
      text: e.target.value,
      done: false,
    };
    const newArray = todos.concat(newTodo);
    setTodos = newArray;
  };

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
      <input placeholder="할 일을 입력해주세요" onChange={onChange} />
    </ListBlock>
  );
}

export default List;
