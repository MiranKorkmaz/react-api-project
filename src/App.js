import React from "react"
import { Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"

import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import CustomerCreatePage from "./pages/CustomerCreatePage"
import Navbar from "./components/Navbar"


function App() {
  return (

    <div>
      <div className="container d-flex justify-content-center"> 
        <Navbar /> 
      </div>
      <div className="container d-flex justify-content-center mt-5">
        <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/home" element={<HomePage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/customer/create" element={<CustomerCreatePage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
