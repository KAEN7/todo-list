import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

const FormBlock = styled.div`
  background: gray;
  display: flex;
  justify-content: center;
`;

function TodoForm() {
  return (
    <FormBlock>
      <form>
        <input autoFocus placeholder="할 일을 적어보세요" />
        <button>
          <FiPlus />
        </button>
      </form>
    </FormBlock>
  );
}

export default TodoForm;
