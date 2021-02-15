import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background: #63e6be;
  &:hover {
    background: #20c997;
  }
  &:active {
    background: #e8d9a9;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 40px;

  border: none;
  outline: none;

  /* 애니메이션 효과 */
  transition: 0.125s all ease-in;

  /* prop가 open일때 사용되는 style */
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      // 45도 회전
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const ontoggle = () => setOpen(!open);

  return (
    <CircleButton onClick={ontoggle} open={open}>
      <MdAdd />
    </CircleButton>
  );
}

export default TodoCreate;
