import React from "react";
// import { createStore } from "redux";
import styled, { createGlobalStyle } from "styled-components";
import TodoTable from "./components/TodoTable";

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
    // <Provider store={store}>
    <>
      <GlobalStyle />
      <TodoTable>hello</TodoTable>
    </>
    // </Provider>
  );
}

export default App;
