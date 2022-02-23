import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
