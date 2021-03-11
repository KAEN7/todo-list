import React, { useState } from "react";
// import { createStore } from "redux";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";

// 스토어 생성
// const store = createStore(rootReducer);

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  input {
    border: none;
  }
`;

function App() {
  const [basic, setBasic] = useState({
    id: 0, // list당 매겨줄 id
    todoList: [], // 이것은 투두리스트구여
    currentCategoryTodoList: [], // 현재 투두리스트 카테고리
    currentCategory: "분류하지 않은 할일", // 현재 카테고리
    completedTodo: [], // 완료한 일
  });

  // 새로만들 투두리스트
  function updateTodoList(text) {
    // 구조분해
    const { id, todoList, currentCategory, currentCategoryTodoList } = basic;

    // 새로운 todo
    const newTodo = {
      id: id,
      text: text,
      category: currentCategory,
      isComplete: false,
    };

    setBasic({
      // concat: 괄호안의 문자열을 전부 결합하여 반환해주는 함수
      todoList: todoList.concat(newTodo), // 새로 만들어진 Todo를 추가
      currentCategoryTodoList: currentCategoryTodoList.concat(newTodo), // 얘도 새로만들어진걸 추가
      id: id + 1,
    });
  }

  function viewCurrentCategoryTodoList(category) {
    setBasic({
      currentCategory: category,
      currentCategoryTodoList: basic.todoList.filter(
        (todo) => todo.category === category
      ),
    });
  }

  return (
    <main>
      <GlobalStyle />
      <Nav viewCurrentCategoryTodoList={viewCurrentCategoryTodoList} />
      <TodoList
        currentCategory={basic.currentCategory}
        updateTodoList={updateTodoList}
        currentCategoryTodoList={basic.currentCategoryTodoList}
      />
    </main>
  );
}

export default App;
