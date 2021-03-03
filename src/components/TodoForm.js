import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

// styled
const FormBlock = styled.div`
  background: gray;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  height: 30px;
`;

const CreateInput = styled.input`
  width: 400px;
  border: none;
  outline: none;
`;

const CreateBtn = styled.button`
  background: white;
  border: none;
  outline: none;
  &:active {
    transform: 0.7;
  }
`;

// function
const clickBtn = (e) => {
  e.preventDefault();
};

function TodoForm() {
  return (
    <FormBlock>
      <Form>
        <CreateInput autoFocus placeholder="할 일을 적어보세요" />
        <CreateBtn onClick={clickBtn}>
          <FiPlus />
        </CreateBtn>
      </Form>
    </FormBlock>
  );
}

export default TodoForm;