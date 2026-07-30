import AboutMe from "../layout/AboutMe";
import Experience from "../layout/Experience";
import Footer from "../layout/Footer";
import HeroSection from "../layout/HeroSection";
import ProjectSection from "../layout/ProjectSection";
import Skills from "../layout/Skills";

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default HomePage;
