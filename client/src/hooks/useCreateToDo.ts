import { useEffect, useState } from "react";
import { toDoInstance } from "../services/todo-service";

export const useCreateToDo = (todo: string) => {
  const create = async () => {
    await toDoInstance().sendToDo(todo);
  };

  useEffect(() => {
    if (!todo) return;
    create();
  }, []);

  return { create };
};
