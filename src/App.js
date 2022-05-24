import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
// import SignUp from "./Pages/SignUp/SignUp";
import Navber from "./Pages/Shared/Navber/Navber";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppoinment from "./Pages/DashBoard/MyAppoinment";
import MyReview from "./Pages/DashBoard/MyReview";
import AllUsers from "./Pages/DashBoard/AllUsers";

function App() {
  return (
    <div class=" ">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard/>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinment></MyAppoinment>} />
          <Route path="review" element={<MyReview></MyReview>} />
          <Route path="users" element={<AllUsers></AllUsers>} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appoinment></Appoinment>
            </RequireAuth>
          }
        ></Route>

        <Route path="/about" element={<About />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
