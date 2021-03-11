import React, { useState } from "react";
import styled from "styled-components";

const LiSylte = styled.li`
  // hover 될때 폰트가 굵어지도록 처리
  &:hover {
    font-weight: bold;
  }
`;

function TodoListItem({ key, todo }) {
  // 할 일 완료 상태를 관리하기 위해 useState 사용
  const [done, setDone] = useState(false);

  const onListClick = () => {
    setDone(!done); // 클릭 될때마다 done의 불리언 값을 뒤집어줌
    console.log(done, key); // test
  };

  const style = {
    // done 값에 따라 testDecoration이 바뀌면서 완료 상태를 눈으로 볼 수 있음
    textDecoration: done ? "line-throught" : "none",
  };

  return (
    <h2>
      <LiSylte style={style} onClick={onListClick}>
        {todo}
      </LiSylte>
    </h2>
  );
}

export default TodoListItem;
