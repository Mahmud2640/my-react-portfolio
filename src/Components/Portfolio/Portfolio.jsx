import React from "react";
import "./Portfolio.css";
import image1 from "../../assets/portfolio1.jpg";
import image2 from "../../assets/portfolio2.jpg";
import image3 from "../../assets/portfolio3.jpg";
import image4 from "../../assets/portfolio4.jpg";
import image5 from "../../assets/portfolio5.png";
import image6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  // fake data do to use this in production
  const data = [
    {
      id: 1,
      image: image1,
      title: "Portfolio 1 Use this line about your project.",
      github: "https://github.com",
      demo: "https://www.google.com",
    },
    {
      id: 2,
      image: image2,
      title: "Portfolio 1 Use this line about your project.",
      github: "https://github.com",
      demo: "https://www.google.com",
    },
    {
      id: 3,
      image: image3,
      title: "Portfolio 1 Use this line about your project.",
      github: "https://github.com",
      demo: "https://www.google.com",
    },
    {
      id: 4,
      image: image4,
      title: "Portfolio 1 Use this line about your project.",
      github: "https://github.com",
      demo: "https://www.google.com",
    },
    {
      id: 5,
      image: image5,
      title: "Portfolio 1 Use this line about your project.",
      github: "https://github.com",
      demo: "https://www.google.com",
    },
    {
      id: 6,
      image: image6,
      title: "Portfolio 1 Use this line about your project.",
      github: "https://github.com",
      demo: "https://www.google.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
