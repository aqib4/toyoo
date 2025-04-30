import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeDark from "./components/HomeDark";
import Contact from "./components/Contact";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/magnific.dark.css";
import "./assets/css/default.css";
import "./assets/css/custom-animated.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific.rtl.css";


import HeroPrivacy from "./components/privacyPolicy/HeroPrivacy";
import HeaderPrivacy from "./components/privacyPolicy/HeaderPrivacy";
import DetailsPrivacy from "./components/privacyPolicy/DetailsPrivacy";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDark />} />
        <Route path="/home" element={<HomeDark />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="privacy" element={<DetailsPrivacy />} />
      </Routes>
    </Router>
  );
};

export default App;
