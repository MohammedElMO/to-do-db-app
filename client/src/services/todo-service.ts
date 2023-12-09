import clientApi from "./client-api";

export type ToDo = {
  id: number;
  todo: string;
};

class TODoService {
  public connection: string = "";
  constructor() {}

  async sendToDo(todo: string) {
    // saveToDo
    try {
      const res = await clientApi.post<{ todo: string }>("/saveToDo", { todo });
      if (res.status == 200) console.log("success ");

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllToDos() {
    try {
      const res = await clientApi.get<ToDo[]>("/todos");
      if (res.status == 200) console.log("success ");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const toDoInstance = () => new TODoService();
