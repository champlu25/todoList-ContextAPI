import { deleteTodo, editTodo } from "../../handlers";
import styles from "./Todos.module.css";
import { AppContext } from "../../context";
import { useContext } from "react";

export const Todos = () => {
  const { todos, searchValue, toggleRefreshTodosFlag } = useContext(AppContext);
  return (
    <>
      {todos
        .filter(({ content }) =>
          content.toLowerCase().includes(searchValue.toLowerCase())
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
    </>
  );
};
