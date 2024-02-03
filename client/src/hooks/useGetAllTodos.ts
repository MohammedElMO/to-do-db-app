import { useEffect, useState } from "react";
import { ToDo, toDoInstance } from "../services/todo-service";

export const useGetAllToDos = () => {
  const [todos, setTodos] = useState([] as ToDo[]);
  const getAllTodos = async () => {
    const res = (await toDoInstance().getAllToDos()) as Awaited<ToDo[]>;
    setTodos(res);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return { todos };
};
