import React from "react";
import styled from "styled-components";

const ListBlock = styled.div`
  position: relative;
  width: 90%;
  min-height: 80px;
  max-height: 140px;
  margin-top: 15px;
  background: black;
`;

function TodoList({ children }) {
  return <ListBlock>test {children}</ListBlock>;
}

export default TodoList;
