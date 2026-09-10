import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";

import resumePdf from "../assets/resume.pdf";
import { ScrollToHash } from "./ScrollToHash";

const navLinks = [
  { label: "About me", to: "/#about-me-section" },
  { label: "Skills", to: "/#skills-section" },
  { label: "Projects", to: "/#projects-section" },
  { label: "Experience", to: "/#experience-section" },
  { label: "Contact me", to: "mailto:tejasva.khandelwal2009@gmail.com" },
  { label: "Resume", to: resumePdf },
];

function AppLayout() {
  return (
    <div className="max-w-350 m-auto">
      <ScrollToHash />
      <Navigation navLinks={navLinks} />
      <Outlet />
      <Footer
        email="khandelwaltejasva@gmail.com"
        github="https://github.com/tejasva-087"
        linkedin="https://www.linkedin.com/in/tejasavkhandelwal/"
        instagram="https://www.instagram.com/tejuss.official/"
        location="Indore, IN"
      />
    </div>
  );
}

export default AppLayout;
