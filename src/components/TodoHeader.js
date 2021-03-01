import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;

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
