import React from "react";

const BurgerMenu = ({ screenRoute, updateIsNavMenuVisable }) => {
  if (screenRoute === "Nav") {
    return null;
  }
  return (
    <div className="burger-menu" onClick={() => updateIsNavMenuVisable("Nav")}>
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </div>
  );
};

export default BurgerMenu;
