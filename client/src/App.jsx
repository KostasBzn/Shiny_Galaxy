import { Routes, Route } from "react-router-dom";
import Confirm from "./pages/Confirm";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </>
  );
}

export default App;
