import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/FooterCom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
