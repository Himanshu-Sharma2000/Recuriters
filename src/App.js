import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import Intro from "./components/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {

  // Front End Developer //

  return (
   
    <>
   
   <Router>
          <Navbar />
         
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<Intro />} />
            </Routes>
        
         
        </Router>
    </>
  );
}

export default App;
