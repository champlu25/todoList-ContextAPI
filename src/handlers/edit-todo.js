export const editTodo = (id, content, toggleRefreshTodosFlag) => {
  const userTodo = prompt("Введите todo", content);
  if (userTodo !== "" && userTodo !== null) {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        content: userTodo,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => console.log(response))
      .finally(() => toggleRefreshTodosFlag());
  }
};
