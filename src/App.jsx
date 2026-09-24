import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import NowBuilding from "./components/NowBuilding";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-text font-body">
      <Navbar />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" className="section-scroll" tabIndex="-1">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <NowBuilding />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
