export const alphabedSort = (todos, dispatch) => {
  const sortedTodos = [...todos].sort((a, b) =>
    a.content.localeCompare(b.content)
  );
  dispatch({ type: "SET_TODOS", payload: sortedTodos });
};
