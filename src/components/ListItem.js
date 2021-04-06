import React from "react";
import styled, { keyframes } from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

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
    min-width: 15px;
    min-height: 15px;
    width: 15px;
    height: 15px;
    margin: 7px;
    cursor: pointer;
    &:hover {
      animation: ${slideup} 1.7s infinite;
      background: #ffc078;
    }
  }
`;

const Remove = styled.div`
  color: white;
  display: flex;
  align-items: center;
  font-size: 27px;
  cursor: pointer;

  &:hover {
    color: #ffc078;
  }
`;

function ListItem({ id, text, done, onRemove, onDone }) {
  return (
    <ListItemBlock>
      <div
        className="doneBox"
        done={done}
        onClick={() => onDone(id, done)}
      ></div>
      <div>{text}</div>
      <Remove done={done} onClick={() => onRemove(id)}>
        <TiDeleteOutline />
      </Remove>
    </ListItemBlock>
  );
}

export default ListItem;

// List컴포넌트에서 받은 props들을 제 위치에 넣어주는 컴포넌트
// 삭제버튼에는 삭제시킬 todo의 id를 부모에 있는 함수에 파라미터로 넣어줌
