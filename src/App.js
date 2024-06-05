import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import SignUpPage from "./components/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
