import "./index.css";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Langages from "./components/Langages";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Langages />
      <Projects />
    </>
  );
}

export default App;
