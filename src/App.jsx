import React, { useState } from "react";
import w3mobile from "./assets/image-web-3-mobile.jpg";
import w3desktop from "./assets/image-web-3-desktop.jpg";
import { cardNewsData, cardHeadlinesData } from "./data.js";
import "./App.css";
import Header from "./assets/Components/Header.jsx";

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
    <article className="card">
      <img srcSet={image} alt={`Image for ${title}`} />

     <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <picture>
          <source media="(max-width: 500px)" srcSet={w3mobile} />
          <source media="(min-width: 501px)" srcSet={w3desktop} />
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
