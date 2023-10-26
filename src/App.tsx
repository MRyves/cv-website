import "./App.css";
import AppLayout from "./components/ui/AppLayout.tsx";
import Header from "./components/ui/Header.tsx";
import Intro from "./components/sections/Intro.tsx";
import AboutMe from "./components/sections/AboutMe.tsx";
import Skills from "./components/sections/Skills.tsx";
import Work from "./components/sections/Work.tsx";
import Projects from "./components/sections/Projects.tsx";
import Education from "./components/ui/Education.tsx";

function App() {
  return (
    <AppLayout>
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <Work />
      <Projects />
      <Education />
    </AppLayout>
  );
}

export default App;
