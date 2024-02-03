import { create } from "zustand";

type Todo = {
  todo: string;
  setTodo: (task: string) => void;
};

export const useTodoColletor = create<Todo>((set) => ({
  todo: "",
  setTodo: (task) => {
    set(() => ({ todo: task }));
  },
}));
