import AboutMe from "./components/layout/AboutMe";
import Experience from "./components/layout/Experience";

import HeroSection from "./components/layout/HeroSection";
import ProjectSection from "./components/layout/ProjectSection";
import Skills from "./components/layout/Skills";
import { Nav, type NavLink } from "./components/nav/Nav";
import Logo from "./components/ui/Logo";
import Footer from "./components/layout/Footer";

import resumepdf from "./assets/Tejasav Khandelwal_Resume.pdf";

const links: NavLink[] = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact me", href: "mailto:tejasva.khandelwal2009@gmail.com" },
  { label: "Resume", href: resumepdf },
];

function App() {
  return (
    <div className="max-w-350 m-auto">
      <header className="p-6 flex items-center justify-between">
        <Logo />
        <Nav links={links} />
      </header>
      <HeroSection className="" />
      <AboutMe />
      <Skills />
      <ProjectSection />
      <Experience />
      <Footer
        email="tejasva.khandelwal2009@gmail.com"
        github="https://github.com/tejasva-087"
        linkedin="https://www.linkedin.com/in/tejasavkhandelwal/"
        instagram="https://www.instagram.com/tejuss.official/"
        location="Indore, IN"
      />
    </div>
  );
}

export default App;
