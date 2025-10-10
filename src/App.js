import React, { useState, useEffect } from "react";
import githubApi from "./data/GithubApi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


// Components
import Nav from "./components/Nav";
import Loading from "./components/Loading";


// Pages

import Home from "./pages/Home";
import Followers from "./pages/Folloers";
import Repo from "./pages/Repo";

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
            <Route path="/l" element={<Loading />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/repo" element={<Repo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
