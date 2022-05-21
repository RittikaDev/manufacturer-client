import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Home/Banner";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="mx-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
    </div>
  );
}

export default App;
