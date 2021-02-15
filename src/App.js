import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate.js";
import TodoHead from "./components/TodoHead.js";
import TodoList from "./components/TodoList.js";

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
