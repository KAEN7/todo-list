import React, { useState, useCallback, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
    padding: 20px;
  }

  input {
    outline: none;
    border: none;
  }
  
  button:focus {
    outline: 0;
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
  min-height: 700px;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

function App() {
  fetch("/test");
  // todos의 id와 텍스트, 완료여부를 상태관리
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "우측에 숨어있는 삭제버튼을 눌러보세요",
      done: false,
    },
    {
      id: 2,
      text: "좌측 체크버튼을 두번 눌러 완료해보세요",
      done: false,
    },
  ]);

  // category의 id와 텍스트 상태관리
  const [categorys, setCategorys] = useState([
    {
      id: 1,
      text: "기본 카테고리",
    },
    {
      id: 2,
      text: "TESTING",
    },
  ]);

  // 기본 id값을 3으로 줌 나중에 test todo 지우면서 같이 지울거임
  const nextId = useRef(3);
  const nextCategoryId = useRef(3);

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

  const onCateInsert = useCallback((text) => {
    const cate = {
      id: nextCategoryId.current,
      text,
    };
    setCategorys(categorys.concat(cate));
    nextCategoryId.current += 1;
  });

  // 해당 todo를 삭제할때 사용되는 함수
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
      // 삭제할 todo의 id를 파라미터로 받아와서 그 id가 아닌 다른 모든 id를 filter로 거른 후 setTodos시킴
    },
    [todos]
  );

  const onRemoveCategory = useCallback(
    (id) => {
      setCategorys(categorys.filter((item) => item.id !== id));
    },
    [categorys]
  );

  // 해당 todo가 완료된 상태면 다른 배열로 옮겨주는 함수
  const onDone = useCallback(
    (id, done) => {
      if (done === false) {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          )
        );
      } else {
        setTodos(todos.filter((todo) => todo.done !== done));
      }
    },
    [todos]
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GlobalStyle />
          <Nav>
            <Link to="/login">Login</Link>
            <Search />
            <Category
              categorys={categorys}
              onRemoveCategory={onRemoveCategory}
              onCateInsert={onCateInsert}
            />
          </Nav>
          <Main>
            <Header />
            <List todos={todos} onRemove={onRemove} onDone={onDone} />
            <Insert onInsert={onInsert} />
          </Main>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// List 컴포넌트에 todos라는 상태를 넘겨줌
// onInsert를 Insert 컴포넌트로 넘겨줘서 관리할 수 있게함
