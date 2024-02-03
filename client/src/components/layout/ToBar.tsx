import { Link } from "react-router-dom";
import Save from "../../assets/icons/Save";
import Create from "../../assets/icons/Create";
import Logo from "../../assets/icons/Logo";

function TopBar() {
  return (
    <header className="font-nunito  w-full bg-blue-barry-hot/75 ">
      <nav className="flex gap-10 px-4 justify-end  w-full items-center *:gap-1   *:p-3 *:rounded-md *:text-white *:font-semibold *:flex *:items-center bg-salty  text-forest-green ">
        {/* <Create />
          ImagineAndCreate */}
        <Link to="/todos" className="bg-blue-barry-cold order-1">
          <Save />
          SavedThoughts
        </Link>
        <Link to="/" className="mr-auto">
          <div className="mr-auto  flex items-center ">
            <Logo /> DO SMTH?
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default TopBar;
