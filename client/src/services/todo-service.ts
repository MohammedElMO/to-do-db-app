import clientApi from "./client-api";

export type ToDo = {
  id: number;
  todo: string;
};

class TODoService {
  async sendToDo(todo: { id: number; todo: string }) {
    // saveToDo
    try {
      const res = await clientApi.post<{ todo: string }>("/saveToDo", todo);

      return res.data;
    } catch (error) {
      throw new Error("error happend");
    }
  }
  async getAllToDos() {
    try {
      const res = await clientApi.get<ToDo[]>("/todos");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const toDoInstance = () => new TODoService();
