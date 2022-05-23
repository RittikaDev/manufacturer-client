import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Home/Banner/Banner";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="mx-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
