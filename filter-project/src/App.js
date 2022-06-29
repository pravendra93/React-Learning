import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
