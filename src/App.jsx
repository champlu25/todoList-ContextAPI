import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { editTodo, addTodo, deleteTodo } from "./handlers";
import { alphabedSort } from "./utils";

function App() {
  const [todos, setTodos] = useState([]);
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
  const [value, setValue] = useState("");

  const toggleRefreshTodosFlag = () => {
    setRefreshTodosFlag(!refreshTodosFlag);
  };

  useEffect(() => {
    fetch("http://localhost:3005/todos")
      .then((response) => response.json())
      .then((loadedData) => {
        setTodos(loadedData);
      });
  }, [refreshTodosFlag]);

  const handleChangeTodo = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className={styles.todosContainer}>
        <div className={styles.headerContent}>
          <span className={styles.title}>Todo List</span>
          <button
            className={styles.alphabedBtn}
            onClick={() => alphabedSort(todos, setTodos)}
          >
            A⬇Z
          </button>
          <button
            className={styles.btnAdd}
            onClick={() => addTodo(toggleRefreshTodosFlag)}
          >
            🞢
          </button>
          <span className={styles.findTodoLabel}>Поиск </span>
          <input
            className={styles.findTodoInput}
            value={value}
            onChange={handleChangeTodo}
          />
        </div>
        {todos
          .filter(({ content }) =>
            content.toLowerCase().includes(value.toLowerCase())
          )
          .map(({ id, content }) => (
            <li className={styles.todoWrapper} key={id}>
              <input type="checkbox" />
              {content}
              <button
                onClick={() => deleteTodo(id, toggleRefreshTodosFlag)}
                className={styles.deleteTodoBtn}
              >
                ❌
              </button>
              <button
                className={styles.editBtn}
                onClick={() => {
                  editTodo(id, content, toggleRefreshTodosFlag);
                }}
              >
                &#x1F589;
              </button>
            </li>
          ))}
      </div>
    </>
  );
}

export default App;
