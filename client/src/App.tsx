import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import CreateToDo from "./components/CreateToDo";
import ToDoView from "./components/routes/todoView";
import SideBar from "./components/sideBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>,
    },
    {
      path: "todos",
      element: <ToDoView />,
    },
    {
      path: "*",
      element: <SideBar />,
    },
  ]);

  return (
    <BrowserRouter>
      {/* <BrowserRouter /> */}

      <main className="bg h-screen flex flex-col justify-center items-center">
        <SideBar />
        <Routes>
          <Route element={<CreateToDo />} path="/" />
          <Route element={<ToDoView />} path="todos" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
