import { useState } from "react";
import { useCreateToDo } from "../hooks/useCreateToDo";
import WhatToDo from "../assets/icons/what-to-do";

function CreateToDo() {
  const [todo, setTodo] = useState<string>("");
  const todoCreate = useCreateToDo(todo);

  const onSubmitToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoCreate.create();
  };
  return (
    <section className="flex w-full items-center p-20  pt-0 justify-center  ">
      <form
        onSubmit={onSubmitToDo}
        className="flex items-center flex-col gap-10"
      >
        <input
          type="text"
          className="border relative rounded-md p-2 w-1/2 bg-green-100/50 outline-none font-nunito appearance-none focus:border-green-300 placeholder:font-nunito placeholder:text-white/200    "
          onChange={(e) => setTodo(e.target.value as string)}
          value={todo}
        />
        <button
          type="submit"
          className="bg-green-600 font-nunito rounded-md font-bold w-72 text-white border-green-400/50 flex items-center gap-3  justify-center p-3 "
        >
          Create What to do
          <WhatToDo />
        </button>
      </form>
    </section>
  );
}

export default CreateToDo;
