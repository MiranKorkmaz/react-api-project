import React from "react"
import { Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"

import LoginPage from "./pages/LoginPage"
import CustomerPage from "./pages/CustomerPage"
import ProfilePage from "./pages/ProfilePage"
import CustomerCreatePage from "./pages/CustomerCreatePage"
import CustomerDetailPage from "./pages/CustomerDetailPage"
import HomePage from "./pages/HomePage"


function App() {
  return (

    <div>
      <div className="container d-flex justify-content-center mt-5">
        <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/customer" element={<CustomerPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/customer/create" element={<CustomerCreatePage/>} />
          <Route path="/customer/:id" element={<CustomerDetailPage/>} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
