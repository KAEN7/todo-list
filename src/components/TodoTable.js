import React from "react";
import styled from "styled-components";

const TableBlock = styled.div`
  width: 700px;
  height: 800px;

  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;

  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 52px;
`;

function TodoTable({ children }) {
  return <TableBlock>{children}</TableBlock>;
}

export default TodoTable;
