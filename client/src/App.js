import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from"./pages/SignIn";
import Calendar from "./pages/Calendar"

function App() {
  return (
    <div>
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
