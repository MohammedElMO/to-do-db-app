import { useEffect } from "react";
import { toDoInstance } from "../services/todo-service";

export const useCreateToDo = (todo: {
  id:number,
  todo:string
}) => {
  const create = async () => {
    await toDoInstance().sendToDo(todo);
  };

  useEffect(() => {
    if (!todo) return;
    create();
  }, []);

  return { create };
};
