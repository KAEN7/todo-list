import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Nav from "./components/Nav";
import SearchList from "./components/SearchList";

function App() {
  const [state, setState] = useState({
    todoList: [], // 투두리스트
    currentCategoryTodoList: [], // 현재 투두리스트 카테고리
    currentCategory: { id: 1, name: "미분류" }, // 현재 카테고리
    completedTodoList: [], // 완료한 투두리스트
    searchResult: [], // 검색 결과
    isSearching: false, // 검색 상태
    id: 0, // 아이디
  });

  // 구조분해
  const {
    todoList,
    currentCategoryTodoList,
    currentCategory,
    completedTodoList,
    searchResult,
    isSearching,
    id,
  } = state;

  // 현재 투두리스트 카테고리 보는 함수
  function viewCurrentCategoryTodoList({
    category, // 카테고리
    todoArr = todoList, // todoArr에 투두리스트를 담아줌
    searchResult = [], // 왜 빈값을 다시 담아준건지 모르겠음
  }) {
    // 상태 변경
    setState({
      todoList: todoArr,
      currentCategory: category,
      currentCategoryTodoList: todoArr.filter(
        (todo) =>
          todo.category.name === category.name && todo.isComplete === false
      ),
      completedTodoList: todoArr.filter(
        (todo) =>
          todo.category.name === category.name && todo.isComplete === true
      ),
      searchResult: searchResult,
    });
  }

  function updateTodoList(text) {
    const newTodo = {
      id: nextId,
      text: text,
      category: currentCategory,
      isComplete: false,
    };
    const updatedArr = todoList.concat(newTodo);
    const nextId = id + 1;
    viewCurrentCategoryTodoList(currentCategory, updatedArr);
  }

  function removeTodo(id) {
    const removedArr = todoList.filter((todo) => todo.id !== id);
    viewCurrentCategoryTodoList(currentCategory, removedArr);
  }

  function removeCategory(category) {
    const removedArr = todoList.filter(
      (todo) => todo.category.name !== category.name
    );
    viewCurrentCategoryTodoList({ id: 0, name: "미분류" }, removedArr);
  }

  function toggleTodoComplete(id) {
    const completedTodo = todoList.filter((todo) => todo.id === id)[0];
    completedTodo.isComplete = !completedTodo.isComplete;
    const changedArr = todoList
      .filter((todo) => todo.id !== id)
      .concat(completedTodo);
    changedArr.sort((a, b) => a.id - b.id);

    viewCurrentCategoryTodoList(currentCategory, changedArr);
  }

  function updateTodoText(id, text) {
    const updatedTodo = this.todoList.filter((todo) => todo.id === id)[0];
    updatedTodo.text = text;
    const changedArr = todoList
      .filter((todo) => todo.id !== id)
      .concat(updatedTodo);
    changedArr.sort((a, b) => a.id - b.id);

    viewCurrentCategoryTodoList(currentCategory, changedArr);
  }

  function updateCategoryName(targetCategory) {
    const updatedTodo = todoList.filter(
      (todo) => todo.category.id === targetCategory.id
    );
    updatedTodo.forEach((todo) => (todo.category.name = targetCategory.name));
    const changedArr = todoList
      .filter((todo) => todo.category.id !== targetCategory.id)
      .concat(updatedTodo);

    changedArr.sort((a, b) => a.id - b.id);

    viewCurrentCategoryTodoList(targetCategory, changedArr);
  }

  function searchTodo(word) {
    if (word.length > 0) {
      setState({
        isSearching: true,
      });
      const searchTitle = {
        id: 0,
        name: `'${word}'에 대한 검색결과`,
      };
      const regex = new RegExp(word, "gi");
      const targetTodosArr = todoList.filter((todo) => todo.text.match(regex));
      viewCurrentCategoryTodoList(searchTitle, undefined, targetTodosArr);
    } else {
      setState({
        isSearching: false,
      });
      viewCurrentCategoryTodoList({ id: 1, name: "미분류" });
    }
  }

  function setSearchingToFalse() {
    setState({
      isSearching: false,
    });
  }

  return (
    <main>
      <Nav
        viewCurrentCategoryTodoList={viewCurrentCategoryTodoList}
        removeCategory={removeCategory}
        updateCategoryName={updateCategoryName}
        searchTodo={searchTodo}
        setSearchingToFalse={setSearchingToFalse}
      />
      {isSearching ? (
        <SearchList
          currentCategory={currentCategory}
          searchResult={searchResult}
          viewCurrentCategoryTodoList={viewCurrentCategoryTodoList}
          setSearchingToFalse={setSearchingToFalse}
        />
      ) : (
        <TodoList
          currentCategory={currentCategory}
          updateTodoList={updateTodoList}
          currentCategoryTodoList={currentCategoryTodoList}
          removeTodo={removeTodo}
          removeCategory={removeCategory}
          completedTodoList={completedTodoList}
          toggleTodoComplete={toggleTodoComplete}
          updateTodoText={updateTodoText}
        />
      )}
    </main>
  );
}

export default App;
