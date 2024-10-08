import Dashboard from "./Components/Dashoard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Home from "./Components/Home/Home";
import Protect from "./Components/Protect";
function App() {
const isLoggedIn = window.localStorage.getItem("token");

  

  return (
    <BrowserRouter>
      <div>
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />       
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route element={<Protect />}>
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
