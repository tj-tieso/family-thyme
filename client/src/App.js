import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Calendar from "./pages/Calendar";
// import Header from "./components/Header/index";
// import Footer from "./components/Footer/index";
 import Navbar from "./components/Navbar/index";
 import "./styles.css"
 import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
