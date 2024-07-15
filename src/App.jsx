import React from "react";
import Blog from "./pages/Blogs/Blog";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from './pages/Works/Works'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="works" element={<Works />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
