import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";

import './App.css';

function App() {

  return (
    <div className="uandme__">
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
