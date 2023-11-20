import github from "../assets/svg/github.svg";
import frontendmentor from "../assets/svg/frontendmentor.svg";
import linkedin from "../assets/svg/linkedin.svg";
import codepen from "../assets/svg/codepen.svg";

function Socials() {
  return (
    <>
      <img src={github} alt="Github logo" />
      <img src={frontendmentor} alt="FrontEnd Mentor logo" />
      <img src={linkedin} alt="LinkedIn logo" />
      <img src={codepen} alt="Codepen logo" />
    </>
  );
}

export default Socials;
