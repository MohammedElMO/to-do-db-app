import Input from "./common/Input";
import Importance from "./Importance";
import { useState } from "react";

function ToDoForm() {
  const cruciality = [
    { type: "can wait", checked: false },
    { type: "better early", checked: false },
    { type: "Important", checked: false },
  ];
  const [checkedTime, setCheckedTime] = useState(cruciality);

  return (
    <form className=" flex flex-col bg-green-300 absolute w-1/2 h-full my-10 p-20 rounded-lg gap-20">
      <Input
        type="text"
        placeholder="what would you do ?"
        className="border relative flex-.4 rounded-md p-3  bg-gray-200/50 outline-none font-nunito appearance-none focus:border-green-300 placeholder:font-nunito placeholder:text-white/200    "
      />
      <Importance
        onCheck={(time) =>
          setCheckedTime(() => {
            const checkedTime =
              cruciality.find((c) => c.type === time.type) ||
              ({} as { checked: boolean; type: string });
              
            return [...cruciality, { ...checkedTime, checked: true }];
          })
        }
        cruciality={checkedTime}
      />
    </form>
  );
}

export default ToDoForm;
