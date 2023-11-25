import React from "react";
import Langage from "./Langage";

const Langages = () => {
  const langagesArray = [
    "HTML",
    "CSS",
    "Sass",
    "Styled-components",
    "Bulma CSS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
  ];

  return (
    <>
      <div className="langageGrid">
        {langagesArray.map((element) => (
          <Langage name={element} />
        ))}
      </div>
    </>
  );
};

export default Langages;
