import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Project1 from "./components/Project1";
import Notifi from "./components/Notifi";
import Map from "./components/Map";
function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#f7efe5" }}>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/pro1" element={<Project1 />} />
          <Route path="/noti" element={<Notifi />} />
          <Route path="/mapp" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
