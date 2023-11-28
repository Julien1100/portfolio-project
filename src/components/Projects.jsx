import React from "react";
import Project from "./Project";
import airbnbclone from "../assets/images/airbnb-clone.png";
import portfolio from "../assets/images/portfolio-website.png";
import pomodoro from "../assets/images/pomodoro-app.png";
import editiorMarkdown from "../assets/images/in-browser-markdown-editor.png";
import restAPI from "../assets/images/REST-countries-API.png";
import calculatrice from "../assets/images/calculator-app.png";
import drumMachine from "../assets/images/drum-machine.png";
import space from "../assets/images/space-tourism-website.png";
import randomQuote from "../assets/images/random-quote-app.png";

const Projects = () => {
  const projectsList = [
    {
      img: airbnbclone,
      name: "airbnb-clone-2023",
      langages: ["tailwind", "typescript", "react", "mongodb"],
    },
    {
      img: portfolio,
      name: "portfolio",
      langages: ["typescript", "react"],
    },
    {
      img: pomodoro,
      name: "pomodoro",
      langages: ["tailwind", "typescript", "react"],
    },
    {
      img: editiorMarkdown,
      name: "editeur markdown",
      langages: ["scss", "typescript", "react"],
    },
    {
      img: restAPI,
      name: "rest countries api",
      langages: ["css", "typescript", "vue"],
    },
    {
      img: calculatrice,
      name: "application de calculatrice",
      langages: ["scss", "typescript", "vue"],
    },
    {
      img: drumMachine,
      name: "drum machine",
      langages: ["styled components", "typescript", "react"],
    },
    {
      img: space,
      name: "site de tourisme dans l'espace",
      langages: ["html", "css", "typescript"],
    },
    {
      img: randomQuote,
      name: "random quote app",
      langages: ["css", "react", "api"],
    },
  ];

  return (
    <>
      <div className="project-title-container">
        <h2 className="project-title">Projets</h2>
        <button>Contactez-moi</button>
      </div>
      <div className="project-grid">
        {projectsList.map((element) => (
          <div className="project-card">
            <Project
              img={element.img}
              name={element.name.toLocaleUpperCase()}
              langages={element.langages.map((langage, index) => (
                <span key={index} className="langage-item">
                  {langage.toUpperCase()}
                </span>
              ))}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
