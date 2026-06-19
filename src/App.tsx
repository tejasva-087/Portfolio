import AboutMe from "./components/laypout/AboutMe";
import HeroSection from "./components/laypout/HeroSection";
import Skills from "./components/laypout/Skills";
import { Nav, type NavLink } from "./components/nav/Nav";
import Logo from "./components/ui/Logo";

const links: NavLink[] = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact me", href: "/contact" },
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
    </div>
  );
}

export default App;
