import React from "react";
import styled, { keyframes } from "styled-components";

// keyframes
const slideup = keyframes`
    from {
        transform: scale(1);
    }
    
    to {
        transform: scale(1.1);
    }
`;

// list item 스타일
const ListItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 18px;
  .doneBox {
    border: 3px solid #ffc078;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    &:hover {
      animation: ${slideup} 1.7s infinite;
      background: #ffc078;
    }
  }
`;

function ListItem({ key, id, text, done }) {
  return (
    <ListItemBlock>
      <div className="doneBox"></div>
      <div done={done}>{text}</div>
      <div>삭제</div>
    </ListItemBlock>
  );
}

export default ListItem;

// List컴포넌트에서 받은 props들을 제 위치에 넣어주는 컴포넌트
