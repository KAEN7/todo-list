import React, { useState } from "react";

function App() {
  return (
    <>
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
