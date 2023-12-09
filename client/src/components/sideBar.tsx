import { Link } from "react-router-dom";
import Done from "../assets/icons/Done";
import Remove from "../assets/icons/Remove";
import Save from "../assets/icons/Save";

function SideBar() {
  return (
    <aside className="font-nunito  font-bold fixed left-0 bg-green-600 p-4 h-full text-white">
      <ul className=" h-full leading-relaxed flex flex-col justify-around gap-5">
        <Link to="/">
          <li className="todo-route">create</li>
        </Link>
        <Link to="/todos">
          <li className="todo-route">
            Saved
            <Save />
          </li>
        </Link>
        <li className="todo-route">
          <Remove />
          Removed
        </li>
        <li className="todo-route">
          <Done />
          Done
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
