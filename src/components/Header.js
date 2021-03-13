import React from "react";

function Header() {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = dayList[today.getDay()];

  return (
    <h2>
      {year}. {month}. {date}. {day}
    </h2>
  );
}

export default Header;
