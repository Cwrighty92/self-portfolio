import React, { useState } from "react";
import "./App.css";
import BurgerMenu from "./burger-menu";
import Home from "./home";
import About from "./about";
import Work from "./work";
import Contact from "./contact";
import Nav from "./nav";

function App() {
  const [screenRoute, updateScreenRoute] = useState("Home");
  return (
    <div className="App">
      <BurgerMenu
        screenRoute={screenRoute}
        updateIsNavMenuVisable={updateScreenRoute}
      />

      {screenRoute === "Nav" && <Nav updateScreenRoute={updateScreenRoute} />}
      {screenRoute === "Home" && <Home />}
      {screenRoute === "About" && <About />}
      {screenRoute === "Work" && <Work />}
      {screenRoute === "Contact" && <Contact />}
    </div>
  );
}

export default App;
