import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

function TodoHeader() {
  return (
    <HeaderBlock>
      <h2>2021.03.01 MON</h2>
    </HeaderBlock>
  );
}

export default TodoHeader;
