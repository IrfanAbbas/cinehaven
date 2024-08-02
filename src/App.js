import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Login from "./Components/Login";
// import Accont from "./Components/Accont";
import "./App.scss"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Accont" element={<Accont />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
