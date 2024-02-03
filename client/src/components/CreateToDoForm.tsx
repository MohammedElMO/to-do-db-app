import Input from "./common/Input";
import { useTodoColletor } from "../manage-state/TodoSubmitter";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoTypes, todoSchema } from "../schema/validation/CreateTodoSchema";
import Button from "./common/Button";


function ToDoForm() {
  const todoCollector = useTodoColletor();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<TodoTypes>({
    resolver: zodResolver(todoSchema),
  });
  const onSendTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(todoCollector.todo);
  };
  return (
    <section className="flex font-nunito w-full items-center p-20  pt-0 justify-center  ">
      <form onSubmit={onSendTodo} className="flex items-center flex-col gap-10">
        <Input
          {...register("todo")}
          type="text"
          className="border relative rounded-md p-2 w-1/2 bg-green-100/50 outline-none font-nunito appearance-none focus:border-green-300 placeholder:font-nunito placeholder:text-white/200    "
          onChange={(e) => todoCollector.setTodo(e.target.value)}
          value={todoCollector.todo}
        />
        <div className="text-blue-barry-hot font font-rubik font-medium">
          {errors.todo?.message}
        </div>
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
}

export default ToDoForm;
