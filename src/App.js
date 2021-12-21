import React from "react"
import { Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"

import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
