import React, { useState } from "react";
import Sketch from "./Sketch.jsx";
import Navbar from "./Navbar.js";
import Nosotres from "./Nosotres.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import "./../../src/Home.css";
const param = window.location.pathname.length > 2;

const Home = () => {
  const [navAct, setNavAct] = useState(true);

  const setNavActFunction = (navAct) => {
    setNavAct(!navAct);
  };

  return (
    <div className="home">
      <Navbar setNavAct={() => setNavActFunction(navAct)} />
      <div style={{ minHeight: "100vh" }}>
        {!param && navAct ? <Sketch /> : null}
      </div>
      <Nosotres />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
