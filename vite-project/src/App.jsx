import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Components/Services";
import UseCases from "./Pages/Use Cases";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

    </Router>
  );
};

export default App;