import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

let number = 3;

function App() {
  // const [todo, setTodo] = useState([]);
  // const nextId = useRef(1);

  // 리스트  /----->

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "해도해도 끝이 없다...",
      isDone: false,
    },
    {
      id: 2,
      title: "진짜로?!",
      body: "아닐껄?",
      isDone: true,
    },
  ]);

  const onDeleteHanlder = (todoId) => {
    const newTodo = todo.filter((todo1) => {
      return todo1.id !== todoId;
    });
    setTodo(newTodo);
  };

  const onEditHandler = (todoId) => {
    const newTodo = todo.map((todo1) => {
      if (todo1.id === todoId) {
        return {
          ...todo1,
          isDone: !todo1.isDone,
        };
      } else {
        return { ...todo1 };
      }
    });

    setTodo(newTodo);
  };

  // <-----/

  //폼 콤포넌트 /----->

  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [input, setInput] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // setInput(e.target.value);
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.title.trim() === "" || input.body.trim() === "") return;
    setTodo([...todo, { ...input, id: number }]);
    setInput(initialState);
    number++;
    console.log(todo);
  };
  // <-----/

  return (
    //레이아웃 , 헤더
    <div className="layout">
      <div className="Header">
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <form onSubmit={onSubmitHandler} className="add-form" /*폼*/>
        <div className="input-group">
          <label className="input-Text">제목</label>
          <input
            type="text"
            name="title"
            className="input"
            value={input.title}
            onChange={onChangeHandler}
          ></input>
          <label class="input-Text">내용</label>
          <input
            type="text"
            name="body"
            value={input.body}
            className="input"
            onChange={onChangeHandler}
          ></input>
        </div>
        <button className="add-button">추가하기</button>
      </form>

      <div className="list-container">
        <h2 className="list-title">진행중.. 🔥</h2>
        <div className="list-wrapper">
          {todo.map((todo1) => {
            if (!todo1.isDone) {
              return (
                <div className="todo-container">
                  <div>
                    <h2 className="todo-title">{todo1.title}</h2>
                    <div>{todo1.body}</div>
                  </div>
                  <div className="button-set">
                    <button
                      className="todo-delete-button button"
                      onClick={() => onDeleteHanlder(todo1.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="todo-complete-button button"
                      onClick={() => onEditHandler(todo1.id)}
                    >
                      {todo1.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <h2 className="list-title">끝!!! 🎉</h2>
        <div className="list-wrapper">
          {todo.map((todo1) => {
            if (todo1.isDone) {
              return (
                <div className="todo-container">
                  <div>
                    <h2 className="todo-title">{todo1.title}</h2>
                    <div>{todo1.body}</div>
                  </div>
                  <div className="button-set">
                    <button
                      className="todo-delete-button button"
                      onClick={() => onDeleteHanlder(todo1.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="todo-complete-button button"
                      onClick={() => onEditHandler(todo1.id)}
                    >
                      {todo1.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

/* <div className="list-container">
        <h2 className="list-title">Working.. 🔥</h2>
        <div className="list-wrapper">
          <div className="todo-container">
            <div>
              <h2 className="todo-title">리액트 공부하기</h2>
              <div>리액트 기초를 공부해봅시다.</div>
            </div>
            <div className="button-set">
              <button className="todo-delete-button">삭제하기</button>
              <button className="todo-complete-button">완료</button>
            </div>
          </div>
        </div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div className="list-wrapper">
          <div className="todo-container">
            <div>
              <h2 className="todo-title">리액트 공부하기</h2>
              <div>리액트 기초를 공부해봅시다.</div>
            </div>
            <div className="button-set">
              <button className="todo-delete-button">삭제하기</button>
              <button className="todo-complete-button">취소</button>
            </div>
            <div className="todo-container"> */

// //리스트
// <div className="list-container">
// <h2 className="list-title">Working.. 🔥</h2>
// <div className="list-wrapper">
//   {todos.map((todo) => {
//     if (!todo.isDone) {
//       return (
//         <Todo
//           todo={todo}
//           key={todo.id}
//           setTodos={setTodos}
//           onDeleteHanlder={onDeleteHanlder}
//           onEditHandler={onEditHandler}
//         />
//       );
//     } else {
//       return null;
//     }
//   })}
// </div>
// <h2 className="list-title">Done..! 🎉</h2>
// <div className="list-wrapper">
//   {todos.map((todo) => {
//     if (todo.isDone) {
//       return (
//         <Todo
//           todo={todo}
//           key={todo.id}
//           setTodos={setTodos}
//           onDeleteHanlder={onDeleteHanlder}
//           onEditHandler={onEditHandler}
//         />
//       );
//     } else {
//       return null;
//     }
//   })}
// </div>
// </div>

// <div>
//   <h2 className="todo-title">{todo.title}</h2>
//   <div>{todo.body}</div>
// </div>
// <div className="button-set">
//   <button
//     className="todo-delete-button button"
//     onClick={() => onDeleteHanlder(todo.id)}
//   >
//     삭제하기
//   </button>
//   <button
//     className="todo-complete-button button"
//     onClick={() => onEditHandler(todo.id)}
//   >
//     {todo.isDone ? "취소" : "완료"}
//   </button>
// </div>
// </div>
