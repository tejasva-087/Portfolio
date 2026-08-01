import AboutMeSection from "../features/LandingPage/AboutMeSection";
import ExperienceSection from "../features/LandingPage/ExperienceSection";
import HeroSection from "../features/LandingPage/HeroSection";
import ProjectSection from "../features/LandingPage/ProjectSection";
import SkillsSection from "../features/LandingPage/SkillsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
    </>
  );
}

export default HomePage;
