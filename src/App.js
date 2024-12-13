import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/currencyConverter" element={<CurrencyConverter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {}
    </Router>
  );
};

export default App;
