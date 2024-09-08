import { useEffect, useState } from "react";
import styles from "./app.module.css";
// Добавить кнопку добавить дело.
function App() {
  const [todos, setTodos] = useState([]);
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3005/todos")
      .then((response) => response.json())
      .then((loadedData) => {
        setTodos(loadedData);
      });
  }, [refreshTodosFlag]);

  const addTodo = () => {
    const userTodo = prompt("Введите todo");
    if (userTodo !== "" && userTodo !== null) {
      fetch("http://localhost:3005/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          content: userTodo,
        }),
      })
        .then((rawResponse) => {
          rawResponse.json();
          console.log(rawResponse);
        })
        .then(() => {
          console.log("Ответ от сервера: todo добавлен: ");
        })
        .finally(() => setRefreshTodosFlag(!refreshTodosFlag));
    }
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "DELETE",
    })
      .then((rawResponce) => rawResponce.json())
      .then((responce) => console.log(responce))
      .finally(() => setRefreshTodosFlag(!refreshTodosFlag));
  };

  const edtiTodo = (id) => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        content: 17900,
      }),
    })
      .then((rawResponce) => rawResponce.json())
      .then((responce) => console.log(responce))
      .finally(() => setRefreshTodosFlag(!refreshTodosFlag));
  };

  return (
    <>
      <div className={styles.todosContainer}>
        <div className={styles.headerContent}>
          <span className={styles.title}>Todo List</span>
          <button className={styles.btnAdd} onClick={addTodo}>
            🞢
          </button>
        </div>

        {todos.map(({ id, content }) => (
          <li className={styles.todoWrapper} key={id}>
            <input type="checkbox" />
            {content}
            <button
              onClick={() => deleteTodo(id)}
              className={styles.deleteTodoBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
