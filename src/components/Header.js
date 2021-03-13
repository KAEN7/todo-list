import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.h2`
  margin: 0 auto;
  padding: 10px;
  font-size: 30px;
`;

function Header() {
  let today = new Date(); // 날짜

  let year = today.getFullYear(); // 연도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 일
  let dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // 요일리스트
  let day = dayList[today.getDay()]; // 요일 숫자로 불러와짐

  return (
    <HeaderBlock>
      {year}. {month}. {date}. {day}
    </HeaderBlock>
  );
}

export default Header;
