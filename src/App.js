import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Home/Banner/Banner";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="mx-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
