export const addTodo = (toggleRefreshTodosFlag) => {
  const userTodo = prompt("Введите todo");
  if (userTodo !== "" && userTodo !== null) {
    fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        content: userTodo,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Ответ от сервера: todo добавлен: ", response);
      })
      .finally(() => toggleRefreshTodosFlag());
  }
};
