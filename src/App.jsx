import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/AboutSection/About";
import Banner from "./components/Banner/Banner";
import { Buysection } from "./components/Buysection";
import { CollectionSection } from "./components/CollectionSection";
import Contact from "./components/ContactSection/Contact";
import { MenCollection } from "./components/MenCollection";
import { Navbar } from "./components/Navbar";
import { PageNotFound } from "./components/PageNotFound";
import { WomenCollection } from "./components/WomenCollection";

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<CollectionSection />} />
        <Route path="collection" element={<Buysection />} />
        <Route path="men" element={<MenCollection />} />
        <Route path="women" element={<WomenCollection />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='about' element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
