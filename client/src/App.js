import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AnimePage from "./components/AnimePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list/:id" element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
