import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminView from "./views/AdminView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminView />} />
    </Routes>
  );
}

export default App;
