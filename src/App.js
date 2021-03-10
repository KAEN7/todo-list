import React, { useState } from "react";
// import { createStore } from "redux";
import styled, { createGlobalStyle } from "styled-components";
import TodoList from "./components/TodoList";

// 스토어 생성
// const store = createStore(rootReducer);

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  body {
    background: #ced4da;
  }
`;

function App() {
  return (
    <>
      <h1>TodoList Sample</h1>
      <TodoList todos={["리액트 연습", "상태관리", "투두 예제"]} />{" "}
      {/* props로 todos를 보내줌 */}
    </>
  );
}

export default App;
