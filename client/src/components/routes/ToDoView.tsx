import { useGetAllToDos } from "../../hooks/useGetAllTodos";

function ToDoView() {
  const { todos } = useGetAllToDos();
  return (
    <div className="grid grid-cols-4 gap-20">
      {todos.map(({ todo, id }) => (
        <li key={id}>{todo}</li>
      ))}
    </div>
  );
}

export default ToDoView;
