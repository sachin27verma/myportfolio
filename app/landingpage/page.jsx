
import Herosection from "./Herosection";
import Project from "./Project";
import About from "./About";
import Skill from "./Skill";
import Contactme from "./Contactme";
import Footer from "./Footer";

export default function Landingpage() {

  // style={{ backgroundImage: 'url("/aibc24.jpg")' }}
  return (
    <  >
      <Herosection />
      <Project />
      <About />
      <Skill />
      <Contactme />
      <Footer />
    </>
  );
}
