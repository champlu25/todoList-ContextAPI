export const alphabedSort = (todos, setTodos) => {
  const sortedTodos = [...todos].sort((a, b) =>
    a.content.localeCompare(b.content)
  );
  setTodos(sortedTodos);
};
