import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { Header, Todos } from "./components";
import { AppContext } from "./context";

function App() {
  const [todos, setTodos] = useState([]);
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = (action) => {
    const { type, payload } = action;

    switch (type) {
      case "SET_TODOS": {
        setTodos(payload);
        break;
      }
      case "SET_SEARCH_VALUE": {
        setSearchValue(payload);
        break;
      }
    }
  };

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

  return (
    <>
      <AppContext.Provider
        value={{ todos, toggleRefreshTodosFlag, searchValue, dispatch }}
      >
        <div className={styles.todosContainer}>
          <Header />
          <Todos />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
