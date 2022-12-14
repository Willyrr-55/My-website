import React from "react";
import "./experience.css";
import { FaCheckSquare } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Middle</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Middle-high</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Middle-high</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small>Middle</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Middle-high</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>Angular Material</h4>
                <small>Middle</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small>Middle</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                {" "}
                <h4>Express</h4>
                <small>Middle</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small>Middle</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
