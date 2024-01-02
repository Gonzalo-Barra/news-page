import React, { useState } from "react";
import w3mobile from "./assets/image-web-3-mobile.jpg";
import w3desktop from "./assets/image-web-3-desktop.jpg";
import { cardNewsData, cardHeadlinesData } from "./data.js";
import "./App.css";
import logo from "./assets/logo.svg";
import navbarlogo from "./assets/icon-menu.svg";
import navbarlogoclose from "./assets/icon-menu-close.svg";

function CardNews({ title, text, children }) {
  return (
    <>
      {children}
      <h3>{title}</h3>
      <p>{text}</p>
      <hr />
    </>
  );
}
function CardHeadlines({ title, subtitle, text, image }) {
  return (
    <article className="card-headlines">
      <picture>
        <img srcSet={image} alt={`Image for ${title}`} />
      </picture>
      <section className="card-info">
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{text}</p>
      </section>
    </article>
  );
}

function NavbarOpen({ navbarClick, setNavbarClick }) {
  const handleOnClick = () => {
    setNavbarClick(!navbarClick);
  };

  return (
    <>
     

      <section className="navbar-mobile">
      <section className="navbar-icon">
        <img srcSet={navbarlogoclose} onClick={handleOnClick} />
      </section>
        <ul>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>New</a>
          </li>
          <li>
            {" "}
            <a>Popular</a>
          </li>
          <li>
            {" "}
            <a>Trending</a>
          </li>
          <li>
            {" "}
            <a>Categories</a>
          </li>
        </ul>
      </section>
    </>
  );
}

function Navbar() {
  const [navbarClick, setNavbarClick] = useState(true);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <img
        onClick={() => setNavbarClick(!navbarClick)}
        src={navbarlogo}
        alt="Navbar Logo"
      />
      {navbarClick ? (
        <NavbarOpen navbarClick={navbarClick} setNavbarClick={setNavbarClick} />
      ) : null}
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <picture>
          <source media="(max-width: 1439px)" srcSet={w3mobile} />
          <source media="(min-width: 1440px)" srcSet={w3desktop} />
          <img src={w3mobile} className="banner" />
        </picture>
        <article className="main">
          <h1>The Bright Future of Web 3.0?</h1>
          <p>
            {" "}
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read more</button>
        </article>
        <article className="cardNews">
          <h2>New</h2>
          {cardNewsData.map((news, index) => (
            <CardNews
              key={index}
              title={news.title}
              text={news.text}
            ></CardNews>
          ))}
        </article>
        {cardHeadlinesData.map((headline, index) => (
          <CardHeadlines
            key={index}
            title={headline.title}
            subtitle={headline.subtitle}
            text={headline.text}
            image={headline.image}
          />
        ))}
      </main>
    </>
  );
}
