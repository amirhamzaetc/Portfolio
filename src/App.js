import React, { useState, useEffect } from "react";
import githubApi from "./data/GithubApi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components
import Nav from "./components/Nav";


// Pages

import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <div className="response-container">
        <div className="response-box">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
