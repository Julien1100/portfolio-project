import "./index.css";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Langages from "./components/Langages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Langages />
      <Projects />
      <Contact />
      <Header />
    </>
  );
}

export default App;
