import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./features/home/Home";
import Case from "./features/case/Case";
import Materials from "./features/materials/Materials";
import Estimate from "./features/estimate/Estimate";
import Guid from "./features/guid/Guid";
import About from "./features/about/About";
import CaseDetail from "./features/case/CaseDetail";
import "./App.css";

function App() {
  return (
    <div className="uandme">
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case" element={<Case />} />
          <Route path="/case/:id" element={<CaseDetail />} />
          <Route path="/materials" element={<Materials />}>
            <Route path=":subpath" element={<Materials />} />
          </Route>
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/guid" element={<Guid />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
