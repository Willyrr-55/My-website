import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

function Portfolio() {
  const data = [
    {
      id: 1,
      img: IMG1,
      title: "Ecommerce Aplication with MEAN Stack",
      github: "https://github.com",
      demo: "https://agendas.cavalierlatam.com/",
    },
    {
      id: 2,
      img: IMG2,
      title: "Ecommerce Aplication with MEAN Stack",
      github: "https://github.com",
      demo: "https://agendas.cavalierlatam.com/",
    },
    {
      id: 3,
      img: IMG3,
      title: "Ecommerce Aplication with MEAN Stack",
      github: "https://github.com",
      demo: "https://agendas.cavalierlatam.com/",
    },
    {
      id: 4,
      img: IMG4,
      title: "Ecommerce Aplication with MEAN Stack",
      github: "https://github.com",
      demo: "https://agendas.cavalierlatam.com/",
    },
    {
      id: 5,
      img: IMG5,
      title: "Ecommerce Aplication with MEAN Stack",
      github: "https://github.com",
      demo: "https://agendas.cavalierlatam.com/",
    },
    {
      id: 6,
      img: IMG6,
      title: "Ecommerce Aplication with MEAN Stack",
      github: "https://github.com",
      demo: "https://agendas.cavalierlatam.com/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
