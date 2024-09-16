import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./features/home/Home";

import './App.css';

function App() {

  return (
    <div className="uandme">
      <Router basename="/">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />  
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
