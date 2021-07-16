import React from "react";
import styled from "styled-components";
// 서버연결

const BckLogin = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 300px;
  height: 300px;
  border: 1px solid;
  margin-top: 230px;
  .header {
    font-size: 45px;
    margin-bottom: 55px;
  }
  .id {
    outline: none;
    border: none;
    // 밑줄넣기
    font-size: 20px;
    margin-bottom: 30px;
  }
  .pwd {
    outline: none;
    border: none;
    font-size: 20px;
  }
`;

function Login() {
  return (
    <BckLogin>
      <LoginBlock>
        <div className="header">LOGIN</div>
        <input className="id" placeholder="아이디를 입력해주세요" />
        <input
          className="pwd"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </LoginBlock>
    </BckLogin>
  );
}

export default Login;
