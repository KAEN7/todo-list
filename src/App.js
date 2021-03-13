import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Login from "./components/Login";
import Search from "./components/Search";
import Category from "./components/Category";
import Header from "./components/Header";
import List from "./components/List";

// styled-components
const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
  }

  body {
    background: #e9ecef;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;

const Nav = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 0.7px 0.7px #ced4da;
  width: 200px;
  height: 400px;
`;

const Main = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 0.7px 0.7px #ced4da;
  width: 800px;
  height: 700px;
`;

function App() {
  const [state, setState] = useState("");

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
        <List />
      </Main>
    </>
  );
}

export default App;
