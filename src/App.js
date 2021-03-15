import React, { useState, useCallback, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Login from "./components/Login";
import Search from "./components/Search";
import Category from "./components/Category";
import Header from "./components/Header";
import List from "./components/List";
import Insert from "./components/Insert";

// styled-components

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
  }

  body {
    background: #e9ecef;
    display: flex;
    justify-content: center;
    margin-top: 88px;
  }

  input {
    outline: none;
    border: none;
  }
`;

// 네비게이션 스타일
const Nav = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 0.7px 0.7px #ced4da;
  width: 200px;
  height: 400px;
  box-sizing: border-box;
  padding: 10px;
`;

// 메인 스타일
const Main = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 0.7px 0.7px #ced4da;
  width: 800px;
  height: 700px;
  box-sizing: border-box;
  padding: 10px;
`;

function App() {
  // todos의 id와 텍스트, 완료여부를 상태관리
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "test",
      done: false,
    },
  ]);

  // 기본 id값을 2로 줌 나중에 test todo 지우면서 같이 지울거임
  const nextId = useRef(2);

  // input에서 값을 받아 새로운 todo를 만들때 사용되는 함수
  const onInsert = useCallback(
    // useCallback으로 todos가 바뀔때마다 재사용되게 함
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        done: false,
      };
      setTodos(todos.concat(todo)); // 배열 합치기
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <>
      <GlobalStyle />
      <Nav>
        <Login />
        <Search />
        <Category />
      </Nav>
      <Main>
        <Header />
        <List todos={todos} />
        <Insert onInsert={onInsert} />
      </Main>
    </>
  );
}

export default App;

// List 컴포넌트에 todos라는 상태를 넘겨줌
// onInsert를 Insert 컴포넌트로 넘겨줘서 관리할 수 있게함
