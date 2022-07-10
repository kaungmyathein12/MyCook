import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Searched from "./pages/Searched";
import Cuisine from "./pages/Cuisine";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/searched/:name" element={<Searched />} />
          <Route path="/cuisine/:cuisine" element={<Cuisine />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
