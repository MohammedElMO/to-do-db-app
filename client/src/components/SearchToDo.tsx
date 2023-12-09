import Search from "../assets/icons/Search";

function SearchToDo() {
  return (
    <section className="flex w-full items-center p-20 pb-10 justify-center  ">
      <input
        type="search"
        placeholder="what to-do..."
        className="border relative rounded-md p-2 w-1/2 bg-green-100/50 outline-none font-nunito appearance-none focus:border-green-300 placeholder:font-nunito placeholder:text-white/200    "
      />
      <Search cls="search" />
    </section>
  );
}

export default SearchToDo;
