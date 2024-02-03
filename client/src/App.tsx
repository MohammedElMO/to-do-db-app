import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/layout/ToBar";
import IntroToDosPage from "./components/routes/IntroToDosPage";
import CreateToDo from "./components/routes/CreateToDo";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route element={<IntroToDosPage />} path="/" />
        <Route element={<CreateToDo />} path="/enovateTodo" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
