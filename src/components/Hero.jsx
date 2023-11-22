import React from "react";
import eiffelTower from "../assets/images/desktop-image.png";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="devInfos">
          <h3>Enchanter de vous rencontrer</h3>
          <h3>
            Je suis <span>François Truchon</span>
          </h3>
          <p>
            Basé à Paris je suis un développeur Fullstack passionné par les
            applications web & l’accesibilité
          </p>
          <button>Contactez-moi</button>
        </div>

        <div className="illustration">
          <img src={eiffelTower} alt="" />
        </div>
      </div>
    </>
  );
};
