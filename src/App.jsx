import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <section id="home"><Home /></section>
        <section id="skills"><Skills /></section>
      </div>
    </>
  );
};

export default App;