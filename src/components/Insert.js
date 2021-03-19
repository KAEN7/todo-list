import React, { useState, useCallback } from "react";
import styled from "styled-components";

// Form style
const FormBlock = styled.form`
  display: flex;
  justify-content: center;
  margin: 13px;
`;

// Button style
const BtnBlock = styled.button`
  box-sizing: border-box;
  width: 70px;
  height: 24px;
  margin: 3px;
  border: 1px solid #ffc078;
  border-radius: 6px;
  background: #ffc078;
  cursor: pointer;
  &:active {
    border: none;
    outline: none;
  }
`;

// input을 통해 todo를 추가하는 컴포넌트
function Insert({ onInsert }) {
  // App으로부터 onInsert 함수를 받아옴

  // input의 value값을 상태관리할 거임
  const [value, setValue] = useState("");

  // input이 onChange될때마다 재사용될 함수 setValue를 e.target.value값으로 바꿔줌
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onInsert와 value가 바뀔때마다 재사용되는 submit 함수
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <FormBlock onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <BtnBlock type="submit" onSubmit={onSubmit}>
        추가
      </BtnBlock>
    </FormBlock>
  );
}

export default Insert;
