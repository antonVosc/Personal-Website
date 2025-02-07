import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <section id="home"><Home /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="work-experience"><WorkExperience /></section>
      </div>
    </>
  );
};

export default App;