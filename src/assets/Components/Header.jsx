import React, { useState } from 'react'
import logo from "../../assets/logo.svg";
import navbarlogo from "../../assets/icon-menu.svg";
import navbarlogoclose from "../../assets/icon-menu-close.svg";
import './Navbar.css'
export default function Navbar() {
    const [navbarClick, setNavbarClick] = useState(true);

    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" />
        <button onClick={() => setNavbarClick(!navbarClick)} aria-label="Toggle Navbar">
  <img src={navbarlogo} alt="Navbar Logo" />
</button>

        <NavbarOpen navbarClick={navbarClick} setNavbarClick={setNavbarClick} />
      </nav>
    );
  }

function NavbarOpen({ navbarClick, setNavbarClick }) {
    const handleOnClick = () => {
      setNavbarClick(!navbarClick);
    };
  
    return (
      <>
        <section className={`navbar-mobile ${navbarClick ? "" : "mostrar"}`}>
          <section className="navbar-icon">
          <button onClick={handleOnClick} aria-label="Cerrar">
  <img srcSet={navbarlogoclose} alt="Close Icon" />
</button>
          </section>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>New</a>
            </li>
            <li>
              <a>Popular</a>
            </li>
            <li>
              <a>Trending</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
          </ul>
        </section>
  
        <div className={`overlay ${navbarClick ? "mostrar" : ""}`} />
      </>
    );
  }
  