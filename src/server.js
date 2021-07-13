const express = require("express");
const cors = require("cors");
const app = express();

const port = 3001;

const todo = require("./components/ListItem"); // 투두 값 받아오고

app.use(cors()); // 모든 요청 cors 적용
app.use(express.json()); // json parser 미들웨어 적용

app.use("/todo", todo);

// 조회
app.get("/", (req, res) => {
  // 파일 받아와서 응답으로 보내기
  res.status(200).sendFile(__dirname + "/src/App.js");
});

// 에러
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// 인터넷 연결
app.use((err, req, res, next) => {
  res.status(500).send({
    message: "Internal Server Error",
    stacktrace: err.toString(),
  });
});

// 서버
app.listen(3001, () => {
  console.log("run server");
});

// 모듈 내보내기
module.exports = app;
