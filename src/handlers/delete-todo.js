export const deleteTodo = (id, toggleRefreshTodosFlag) => {
  fetch(`http://localhost:3005/todos/${id}`, {
    method: "DELETE",
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => console.log(response))
    .finally(() => toggleRefreshTodosFlag());
};
