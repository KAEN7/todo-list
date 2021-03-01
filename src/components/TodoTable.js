import React from "react";
import styled from "styled-components";

const TableBlock = styled.div`
  width: 700px;
  max-height: 800px;
  height: 800px;

  overflow-y: auto;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 52px;
`;

function TodoTable({ children }) {
  return <TableBlock>{children}</TableBlock>;
}

export default TodoTable;
