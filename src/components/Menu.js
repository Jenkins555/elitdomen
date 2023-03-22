import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "../css/Menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">Успех начинается с правильного домена - ElitDomen.Ru</div>
      <nav className={`main-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#category"></a>
          </li>
          <li>
            <a href="#0"></a>
          </li>
          <li>
            <a href="#0"></a>
          </li>
        </ul>
      </nav>
      {/*<div className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={handleMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>*/}
    </header>
  );
};

export default Menu;