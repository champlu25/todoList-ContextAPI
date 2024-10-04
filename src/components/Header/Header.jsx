import { alphabedSort } from "../../utils";
import { addTodo } from "../../handlers";
import { useContext } from "react";
import { AppContext } from "../../context";
import styles from "./Header.module.css";

export const Header = () => {
  const { todos, searchValue, toggleRefreshTodosFlag, dispatch } =
    useContext(AppContext);
  return (
    <div className={styles.headerContent}>
      <span className={styles.title}>Todo List</span>
      <button
        className={styles.alphabedBtn}
        onClick={() => alphabedSort(todos, dispatch)}
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
        searchValue={searchValue}
        onChange={(event) =>
          dispatch({ type: "SET_SEARCH_VALUE", payload: event.target.value })
        }
      />
    </div>
  );
};
