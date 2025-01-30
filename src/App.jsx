import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </>
  );
};

export default App;