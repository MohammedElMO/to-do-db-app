import {
  BrowserRouter,
  Route,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";
import CreateToDo from "./components/CreateToDo";
import SideBar from "./components/sideBar";
import ToDoView from "./components/routes/ToDoView";

function App() {
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
